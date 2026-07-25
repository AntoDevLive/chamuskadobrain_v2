import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  signal
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {

  private readonly destroyRef = inject(DestroyRef);

  menuOpen = signal(false);

  constructor() {

    // Bloquea/restaura el scroll del body cada vez que cambia menuOpen
    effect(() => {
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });

    // Por si el componente se destruye con el menú abierto (ej. navegación programática)
    this.destroyRef.onDestroy(() => {
      document.body.style.overflow = '';
    });

  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

}