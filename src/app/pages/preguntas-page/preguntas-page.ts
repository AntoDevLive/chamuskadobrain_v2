import { ChangeDetectionStrategy, Component } from '@angular/core';

interface IFaq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-preguntas-page',
  imports: [],
  templateUrl: './preguntas-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreguntasPage {

  openedQuestion: number | null = null;

  faqs: IFaq[] = [
    {
      question: '¿Conservo los derechos de mi obra?',
      answer: 'Sí. Siempre. Los derechos de autor pertenecen íntegramente al autor de la obra.'
    },
    {
      question: '¿Sois una editorial tradicional?',
      answer: 'No. Te ayudamos a preparar el material para presentar tu obra a editoriales tradicionales o a optar por la publicación independiente.'
    },
    {
      question: '¿Publicáis directamente mi libro?',
      answer: 'No. Prestamos servicios profesionales para autores independientes que necesitan apoyo en cualquier fase de su proyecto editorial.'
    },
    {
      question: '¿Garantizáis ventas?',
      answer: 'No. Ningún profesional serio puede garantizar las ventas de un libro. Nuestro trabajo consiste en ayudarte a presentar una obra con la máxima calidad posible.'
    },
    {
      question: '¿Puedo contratar solo un servicio?',
      answer: 'Sí. Puedes contratar únicamente el servicio que necesites sin obligación de adquirir ningún otro.'
    },
    {
      question: '¿Trabajáis fuera de España?',
      answer: 'Sí. Trabajamos con autores tanto de España como del extranjero de forma completamente online.'
    },
    {
      question: '¿Cuánto tardáis?',
      answer: 'Depende del tipo de servicio y del volumen del proyecto. Antes de comenzar siempre facilitamos un plazo aproximado que cumplimos con nuestros autores.'
    },
    {
      question: '¿Cómo se realiza el pago?',
      answer: 'Mediante transferencia bancaria o cualquier otro método previamente acordado con el autor.'
    },
    {
      question: 'Si necesito un servicio que no ofrecéis, ¿podéis ayudarme?',
      answer: 'Sí. Como estudio de dirección artística estamos abiertos a propuestas y a ofrecer soluciones personalizadas siempre que podamos ayudarte.'
    }
  ];

  toggleQuestion(index: number): void {
    this.openedQuestion = this.openedQuestion === index ? null : index;
  }

  isOpened(index: number): boolean {
    return this.openedQuestion === index;
  }

}