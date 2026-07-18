import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Servicios } from "../../components/servicios/servicios";
import { Tarifas } from "../../components/tarifas/tarifas";
import { Obras } from "../../components/obras/obras";
import { Navbar } from "../../components/shared/navbar/navbar";
import { Nosotros } from "../../components/nosotros/nosotros";

@Component({
  selector: 'app-home',
  imports: [Hero, Servicios, Tarifas, Obras, Navbar, Nosotros],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

}
