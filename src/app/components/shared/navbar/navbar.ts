import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  signal
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { TranslocoPipe } from '@jsverse/transloco';

interface LangMenuPosition {
  top: number;
  left: number;
}

// Debe coincidir con el ancho del <ul> del submenu en el template (w-44 = 11rem = 176px)
const LANG_MENU_WIDTH = 176;
const VIEWPORT_MARGIN = 8;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslocoPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {

  private readonly destroyRef = inject(DestroyRef);

  menuOpen = signal(false);

  language = inject(LanguageService);

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

  langMenuOpen = signal(false);

  langMenuPos = signal<LangMenuPosition>({ top: 0, left: 0 });

  toggleLangMenu(event: MouseEvent, align: 'end' | 'center' = 'end'): void {
    if (this.langMenuOpen()) {
      this.langMenuOpen.set(false);
      return;
    }

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();

    // Posición "ideal" según el anclaje deseado, ya resuelta en píxeles reales
    // (sin depender de transform, que la animación de entrada sobrescribiría)
    const idealLeft = align === 'end'
      ? rect.right - LANG_MENU_WIDTH
      : rect.left + rect.width / 2 - LANG_MENU_WIDTH / 2;

    const maxLeft = window.innerWidth - LANG_MENU_WIDTH - VIEWPORT_MARGIN;
    const left = Math.min(Math.max(idealLeft, VIEWPORT_MARGIN), Math.max(maxLeft, VIEWPORT_MARGIN));

    this.langMenuPos.set({
      top: rect.bottom + 10,
      left,
    });

    this.langMenuOpen.set(true);
  }

  closeLangMenu(): void {
    this.langMenuOpen.set(false);
  }

  selectLang(code: string): void {
    this.language.setLang(code);
    this.langMenuOpen.set(false);
  }

}