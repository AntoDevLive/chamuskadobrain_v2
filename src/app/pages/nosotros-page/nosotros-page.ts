import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

export interface MiembroEquipo {
  id: string;
  photo: string;
}

@Component({
  selector: 'app-nosotros-page',
  imports: [TranslocoPipe],
  templateUrl: './nosotros-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosPage {
  equipo: MiembroEquipo[] = [
    {
      id: 'paloma',
      photo: '/img/paloma.png'
    },
    {
      id: 'victor',
      photo: '/img/isra.png'
    }
  ];
}