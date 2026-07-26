import { Injectable, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export interface LanguageOption {
  code: 'es' | 'en' | 'fr' | 'it' | 'pt' | 'de';
  label: string;
  flag: string;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private transloco = inject(TranslocoService);

  readonly languages: LanguageOption[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  private readonly langCodes = this.languages.map((l) => l.code);

  constructor() {
    const saved = localStorage.getItem('lang');

    if (saved && this.langCodes.includes(saved as LanguageOption['code'])) {
      this.transloco.setActiveLang(saved);
    } else {
      const browser = this.detectBrowserLang();
      this.transloco.setActiveLang(browser);
      localStorage.setItem('lang', browser);
    }
  }

  get currentLang() {
    return this.transloco.getActiveLang();
  }

  setLang(code: string) {
    if (!this.langCodes.includes(code as LanguageOption['code'])) return;

    this.transloco.setActiveLang(code);
    localStorage.setItem('lang', code);
  }

  getFlag(code: string): string {
    return this.languages.find((l) => l.code === code)?.flag ?? '';
  }

  getLabel(code: string): string {
    return this.languages.find((l) => l.code === code)?.label ?? '';
  }

  private detectBrowserLang(): LanguageOption['code'] {
    const browserLang = navigator.language.split('-')[0];
    const match = this.langCodes.find((code) => code === browserLang);
    return match ?? 'es';
  }
}