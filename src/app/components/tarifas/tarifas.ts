import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITarifa } from '../../interfaces/tarifa';
import { TranslocoPipe } from '@jsverse/transloco';
import { tarifasJson } from '../../json/tarifas';

@Component({
  selector: 'app-tarifas',
  imports: [TranslocoPipe],
  templateUrl: './tarifas.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tarifas {


  tarifas: ITarifa[] = tarifasJson;
}
