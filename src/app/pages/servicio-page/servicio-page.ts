import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { serviciosJson } from '../../json/servicios';
import { tarifasJson } from '../../json/tarifas';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-servicio-page',
  imports: [TranslocoPipe],
  templateUrl: './servicio-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicioPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  servicio = serviciosJson[0];
  tarifa = tarifasJson[0];

  ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('slug');

    const servicio = serviciosJson.find(s => s.slug === slug);
    const tarifa = tarifasJson.find(t => this.slugify(t.servicio) === slug);

    if (!servicio || !tarifa) {
      this.router.navigate(['/404']);
      return;
    }

    this.servicio = servicio;
    this.tarifa = tarifa;
  }

  private slugify(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
}