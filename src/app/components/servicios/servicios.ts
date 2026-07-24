import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IServicio } from '../../interfaces/servicio';
import { serviciosJson } from '../../json/servicios';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicios {

  servicios: IServicio[] = serviciosJson;
}
