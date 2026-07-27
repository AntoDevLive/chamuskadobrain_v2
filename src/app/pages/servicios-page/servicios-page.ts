import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IServicio } from '../../interfaces/servicio';
import { serviciosJson } from '../../json/servicios';
import { RouterLink } from "@angular/router";
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-servicios-page',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './servicios-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosPage {

  servicios: IServicio[] = serviciosJson;
}