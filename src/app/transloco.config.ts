import { inject } from '@angular/core';
import {
  provideTransloco,
  TranslocoLoader,
  translocoConfig,
} from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';

export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    return this.http.get<Record<string, unknown>>(
      `/translations/${lang}.json`
    );
  }
}

export function provideAppTransloco() {
  return provideTransloco({
    config: translocoConfig({
      availableLangs: ['es', 'en', 'fr', 'it', 'pt', 'de'],
      defaultLang: 'es',
      fallbackLang: 'es',
      reRenderOnLangChange: true,
      prodMode: false,
    }),
    loader: TranslocoHttpLoader,
  });
}