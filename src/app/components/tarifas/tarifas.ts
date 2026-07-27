import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITarifa } from '../../interfaces/tarifa';
import { TranslocoPipe } from '@jsverse/transloco';
import { tarifasJson } from '../../json/tarifas';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tarifas',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './tarifas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tarifas {


  tarifas: ITarifa[] = tarifasJson;
}
