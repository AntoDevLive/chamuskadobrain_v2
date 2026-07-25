import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  forwardRef,
  inject,
  signal
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface CalendarDay {
  date: Date;
  label: number;
  currentMonth: boolean;
  disabled: boolean;
  isToday: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'app-calendar-input',
  standalone: true,
  templateUrl: './calendar-input.html',
  styleUrl: './calendar-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarInput),
      multi: true
    }
  ]
})
export class CalendarInput implements ControlValueAccessor {

  private readonly elementRef = inject(ElementRef);
  private readonly today = this.stripTime(new Date());

  open = signal(false);
  disabled = signal(false);
  selectedDate = signal<Date | null>(null);
  viewDate = signal(this.firstOfCurrentMonth());

  readonly weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  readonly monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  readonly monthLabel = computed(() => {
    const d = this.viewDate();
    return `${this.monthNames[d.getMonth()]} ${d.getFullYear()}`;
  });

  readonly calendarDays = computed(() => this.buildCalendarDays(this.viewDate()));

  readonly displayValue = computed(() => {
    const d = this.selectedDate();
    if (!d) return '';
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  });

  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.open.set(false);
    }
  }

  toggle(): void {

    if (this.disabled()) return;

    this.open.update(v => !v);

    if (this.open()) {
      const base = this.selectedDate() ?? this.today;
      this.viewDate.set(new Date(base.getFullYear(), base.getMonth(), 1));
    } else {
      this.onTouched();
    }

  }

  prevMonth(): void {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }

  nextMonth(): void {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  selectDay(day: CalendarDay): void {

    if (day.disabled) return;

    this.selectedDate.set(day.date);
    this.open.set(false);
    this.onTouched();
    this.onChange(this.toIsoDate(day.date));

  }

  dayClass(day: CalendarDay): string {

    const classes = ['flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition'];

    if (day.disabled) {
      classes.push('cursor-not-allowed text-stone-300 line-through');
    } else if (day.isSelected) {
      classes.push('bg-purple-950 text-white shadow-md shadow-purple-950/30');
    } else {
      classes.push('text-stone-700 hover:bg-purple-950/10');
      if (!day.currentMonth) classes.push('text-stone-400');
    }

    if (day.isToday && !day.isSelected) {
      classes.push('ring-2 ring-amarillo');
    }

    return classes.join(' ');

  }

  private firstOfCurrentMonth(): Date {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }

  private stripTime(d: Date): Date {
    const c = new Date(d);
    c.setHours(0, 0, 0, 0);
    return c;
  }

  private toIsoDate(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  private buildCalendarDays(viewDate: Date): CalendarDay[] {

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstOfMonth = new Date(year, month, 1);
    const firstWeekday = (firstOfMonth.getDay() + 6) % 7; // lunes = 0

    const start = new Date(year, month, 1 - firstWeekday);
    const selected = this.selectedDate();
    const selectedStripped = selected ? this.stripTime(selected) : null;

    const days: CalendarDay[] = [];

    for (let i = 0; i < 42; i++) {

      const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      const stripped = this.stripTime(date);

      days.push({
        date,
        label: date.getDate(),
        currentMonth: date.getMonth() === month,
        disabled: stripped <= this.today,
        isToday: stripped.getTime() === this.today.getTime(),
        isSelected: selectedStripped ? selectedStripped.getTime() === stripped.getTime() : false
      });

    }

    return days;

  }

  // ---------- ControlValueAccessor ----------

  writeValue(value: string): void {

    if (!value) {
      this.selectedDate.set(null);
      return;
    }

    const [y, m, d] = value.split('-').map(Number);
    const date = new Date(y, m - 1, d);

    this.selectedDate.set(date);
    this.viewDate.set(new Date(y, m - 1, 1));

  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

}