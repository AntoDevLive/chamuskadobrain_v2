import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IServicio } from '../../interfaces/servicio';
import { serviciosJson } from '../../json/servicios';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-servicios',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './servicios.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicios {

  servicios: IServicio[] = serviciosJson;
}
