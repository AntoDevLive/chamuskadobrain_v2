import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Chamuskadobrain',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'servicios',
    title: 'Chamuskadobrain | Servicios',
    loadComponent: () =>
      import('./pages/servicios-page/servicios-page').then(m => m.ServiciosPage),
  },
  {
    path: 'tarifas',
    title: 'Chamuskadobrain | Tarifas',
    loadComponent: () =>
      import('./pages/tarifas-page/tarifas-page').then(m => m.TarifasPage),
  },
  {
    path: 'obras',
    title: 'Chamuskadobrain | Obras',
    loadComponent: () =>
      import('./pages/obras-page/obras-page').then(m => m.ObrasPage),
  },
  {
    path: 'sobre-nosotros',
    title: 'Chamuskadobrain | Sobre nosotros',
    loadComponent: () =>
      import('./pages/nosotros-page/nosotros-page').then(m => m.NosotrosPage),
  },
  {
    path: 'preguntas-frecuentes',
    title: 'Chamuskadobrain | Preguntas frecuentes',
    loadComponent: () =>
      import('./pages/preguntas-page/preguntas-page').then(m => m.PreguntasPage),
  },
  {
    path: 'contacto',
    title: 'Chamuskadobrain | Contacto',
    loadComponent: () =>
      import('./pages/contacto-page/contacto-page').then(m => m.ContactoPage),
  },
  {
    path: 'presupuesto',
    title: 'Chamuskadobrain | Presupuesto',
    loadComponent: () =>
      import('./pages/presupuesto-page/presupuesto-page').then(m => m.PresupuestoPage),
  },
  {
    path: 'servicio/:slug',
    loadComponent: () =>
      import('./pages/servicio-page/servicio-page').then(m => m.ServicioPage),
  },
  {
    path: '**',
    title: 'Página no encontrada',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page').then(
        m => m.NotFoundPage
      ),
  },
];