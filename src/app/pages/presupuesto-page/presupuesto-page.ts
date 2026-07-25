import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { CalendarInput } from './calendar-input';

const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'odt'];
const MAX_FILE_SIZE_MB = 15;

// Rechaza hoy y cualquier fecha pasada
function futureDateValidator(control: AbstractControl): ValidationErrors | null {

  if (!control.value) return null;

  const selected = new Date(`${control.value}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selected <= today) {
    return { pastDate: true };
  }

  return null;

}

// Rechaza vacío y strings compuestos solo por espacios
function noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  if (typeof value !== 'string') return null;

  if (value.length > 0 && value.trim().length === 0) {
    return { whitespace: true };
  }

  return null;

}

@Component({
  selector: 'app-presupuesto-page',
  imports: [ReactiveFormsModule, CalendarInput],
  templateUrl: './presupuesto-page.html',
  styleUrl: './presupuesto-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresupuestoPage {

  private readonly fb = inject(FormBuilder);

  @ViewChild('fileInput') fileInputRef?: ElementRef<HTMLInputElement>;

  sending = false;
  successMessage = false;
  errorMessage = false;

  // --- Manuscrito (fuera del FormGroup: los inputs file no son reactivos) ---
  selectedFile: File | null = null;
  fileError: string | null = null;
  fileTouched = false;
  dragging = false;

  form = this.fb.nonNullable.group({

    nombre: [
      '',
      [
        Validators.required,
        noWhitespaceValidator,
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        noWhitespaceValidator,
        Validators.email
      ]
    ],

    servicio: [
      '',
      Validators.required
    ],

    palabras: [
      null as number | null,
      [
        Validators.required,
      ]
    ],

    paginas: [
      null as number | null,
      [
        Validators.required,
        Validators.min(10),
        Validators.max(2000)
      ]
    ],

    fechaPublicacion: [
      '',
      [
        Validators.required,
        futureDateValidator
      ]
    ],

    comentarios: [
      '',
      [
        noWhitespaceValidator,
        Validators.maxLength(2000)
      ]
    ]

  });

  // ---------- Manuscrito: drag & drop / selección ----------

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.dragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging = false;
    const file = event.dataTransfer?.files?.[0];
    if (file) this.handleFile(file);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.handleFile(file);
  }

  removeFile(): void {
    this.selectedFile = null;
    this.fileError = null;
    if (this.fileInputRef) {
      this.fileInputRef.nativeElement.value = '';
    }
  }

  private handleFile(file: File): void {

    this.fileTouched = true;

    const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
    const sizeMb = file.size / (1024 * 1024);

    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      this.selectedFile = null;
      this.fileError = `Formato no admitido. Usa: ${ALLOWED_EXTENSIONS.join(', ').toUpperCase()}.`;
      return;
    }

    if (sizeMb > MAX_FILE_SIZE_MB) {
      this.selectedFile = null;
      this.fileError = `El archivo supera el tamaño máximo de ${MAX_FILE_SIZE_MB}MB.`;
      return;
    }

    this.fileError = null;
    this.selectedFile = file;
  }

  formatSize(bytes: number): string {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }

  // ---------- Envío ----------

  submit(): void {

    this.fileTouched = true;

    if (!this.selectedFile) {
      this.fileError = this.fileError ?? 'Adjunta tu manuscrito para continuar.';
    }

    if (this.form.invalid || !this.selectedFile) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.successMessage = false;
    this.errorMessage = false;

    // Payload con valores recortados, listo para enviar
    const raw = this.form.getRawValue();

    const payload = {
      ...raw,
      nombre: raw.nombre.trim(),
      email: raw.email.trim(),
      comentarios: raw.comentarios.trim(),
    };

    // Aquí conectaremos EmailJS/backend (FormData con payload + this.selectedFile)
    setTimeout(() => {

      this.sending = false;
      this.successMessage = true;

      this.form.reset();
      this.removeFile();
      this.fileTouched = false;

      setTimeout(() => {
        this.successMessage = false;
      }, 4000);

    }, 1800);

  }

  hasError(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && c.touched;
  }

  getError(control: string): string {

    const c = this.form.get(control);

    if (!c) return '';

    if (c.hasError('required'))
      return 'Este campo es obligatorio.';

    if (c.hasError('whitespace'))
      return 'Este campo no puede contener solo espacios en blanco.';

    if (c.hasError('email'))
      return 'Introduce un correo válido.';

    if (c.hasError('minlength'))
      return `Debe tener al menos ${c.errors?.['minlength'].requiredLength} caracteres.`;

    if (c.hasError('maxlength'))
      return `No puede superar ${c.errors?.['maxlength'].requiredLength} caracteres.`;

    if (control === 'palabras') {
      if (c.hasError('min')) return 'Debe ser mayor de 1.000 palabras.';
      if (c.hasError('max')) return 'El número parece demasiado elevado.';
    }

    if (control === 'paginas') {
      if (c.hasError('min')) return 'Debe ser mayor de 10 páginas.';
      if (c.hasError('max')) return 'El número parece demasiado elevado.';
    }

    if (control === 'fechaPublicacion' && c.hasError('pastDate'))
      return 'Selecciona una fecha posterior al día de hoy.';

    return '';

  }

}