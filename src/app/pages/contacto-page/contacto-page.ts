import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-page',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto-page.html',
  styleUrl: './contacto-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoPage {

  private readonly fb = inject(FormBuilder);

  sending = false;

  successMessage = false;

  errorMessage = false;

  form = this.fb.nonNullable.group({

    nombre: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    servicio: [
      '',
      Validators.required
    ],

    genero: [
      '',
      Validators.required
    ],

    palabras: [
      null as number | null,
      [
        Validators.required
      ]
    ],

    mensaje: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(2500)
      ]
    ]

  });

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }

    this.sending = true;

    this.successMessage = false;

    this.errorMessage = false;

    // Aquí conectaremos EmailJS o el backend
    setTimeout(() => {

      this.sending = false;

      this.successMessage = true;

      this.form.reset();

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

    if (c.hasError('email'))
      return 'Introduce un correo válido.';

    if (c.hasError('minlength'))
      return `Debe tener al menos ${c.errors?.['minlength'].requiredLength} caracteres.`;

    if (c.hasError('maxlength'))
      return `No puede superar ${c.errors?.['maxlength'].requiredLength} caracteres.`;

    if (c.hasError('min'))
      return 'Debe ser mayor de 1.000 palabras.';

    if (c.hasError('max'))
      return 'El número parece demasiado elevado.';

    return '';

  }

}