import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import AOS from 'aos';
import { Navbar } from './components/shared/navbar/navbar';
import { Footer } from "./components/shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('chamuskadobrain');

  constructor(private router: Router) {

    // Inicializar una sola vez
    AOS.init({
      duration: 1200,
      once: true,
      startEvent: 'load'
    });

    // Refrescar tras cada navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        requestAnimationFrame(() => {
          AOS.refreshHard();
        });

      });

  }
}