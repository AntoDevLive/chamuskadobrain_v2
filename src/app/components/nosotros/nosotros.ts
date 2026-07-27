import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  imports: [RouterLink,TranslocoPipe],
  templateUrl: './nosotros.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nosotros {}
