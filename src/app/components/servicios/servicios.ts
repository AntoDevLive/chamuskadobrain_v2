import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IServicio } from '../../interfaces/servicio';
import { serviciosJson } from '../../json/servicios';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-servicios',
  imports: [TranslocoPipe],
  templateUrl: './servicios.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicios {

  servicios: IServicio[] = serviciosJson;
}
