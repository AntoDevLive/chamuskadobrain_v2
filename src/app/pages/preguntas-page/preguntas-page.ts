import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

interface IFaq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-preguntas-page',
  imports: [TranslocoPipe],
  templateUrl: './preguntas-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreguntasPage {

  private transloco = inject(TranslocoService);

  openedQuestion: number | null = null;

  get faqs(): IFaq[] {
    return this.transloco.translateObject('faqPage.items');
  }

  toggleQuestion(index: number): void {
    this.openedQuestion = this.openedQuestion === index ? null : index;
  }

  isOpened(index: number): boolean {
    return this.openedQuestion === index;
  }

}