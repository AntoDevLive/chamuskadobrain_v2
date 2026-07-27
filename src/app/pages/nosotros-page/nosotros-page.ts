import { ChangeDetectionStrategy, Component } from '@angular/core';
export interface MiembroEquipo {
  name: string;
  role: string;
  bio: string;
  quote: string;
  photo: string;
}
@Component({
  selector: 'app-nosotros-page',
  imports: [],
  templateUrl: './nosotros-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class NosotrosPage {
  equipo: MiembroEquipo[] = [
    {
      name: 'Paloma Castizo',
      role: 'Fundadora · Dirección Editorial',
      bio: 'Escritora, editora y correctora profesional. Especializada en el acompañamiento editorial de autores independientes, la revisión de manuscritos, los informes de lectura y la autopublicación. En Chamuskado Brain coordina cada proyecto y acompaña a los autores desde el primer borrador hasta la publicación de su obra.',
      quote: 'Creo que una buena edición no consiste en cambiar la voz de un autor, sino en ayudarle a que su historia llegue al lector exactamente como merece.',
      photo: '/img/paloma.png'
    },
    {
      name: 'Víctor Tourbillon',
      role: 'Fundador · Dirección Artística',
      bio: 'Artista e ilustrador especializado en dibujo tradicional y técnicas digitales. Responsable de la identidad visual de Chamuskado Brain, desarrolla portadas, ilustraciones y proyectos gráficos personalizados para dar vida a cada historia.',
      quote: 'Cada ilustración es una puerta de entrada a una historia. Mi trabajo es conseguir que el lector quiera abrirla.',
      photo: '/img/isra.png'
    }
  ];
}
