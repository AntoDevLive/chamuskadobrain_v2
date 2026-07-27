import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ITarifa } from '../../interfaces/tarifa';
import { tarifasJson } from '../../json/tarifas';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-tarifas-page',
  imports: [TranslocoPipe],
  templateUrl: './tarifas-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarifasPage {

  protected readonly tarifas: ITarifa[] = tarifasJson;
}
