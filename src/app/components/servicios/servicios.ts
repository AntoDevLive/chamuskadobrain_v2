import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IServicio } from '../../interfaces/servicio';
import AOS from 'aos';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Servicios implements OnInit {

    ngOnInit(): void {
      AOS.init({
        duration: 1300,
        once: true,
      });
    }

  servicios: IServicio[] = [
    {
      id: 1,
      title: 'Publicación en Amazon',
      description: 'Servicio completo de autopublicación en Amazon KDP. Nos encargamos de la preparación, maquetación, configuración y publicación de tu libro para que publiques sin complicaciones.',
      image: '/img/card15.png'
    },
    {
      id: 2,
      title: 'Corrección profesional',
      description: 'Corrección ortotipográfica y de estilo para mejorar la ortografía, gramática, fluidez y legibilidad de tu obra sin alterar tu voz como autor.',
      image: '/img/card14.png'
    },
    {
      id: 3,
      title: 'Informe de lectura',
      description: 'Análisis editorial profesional de tu manuscrito con valoración, estructura, personajes, ritmo, fortalezas y recomendaciones para potenciar su calidad.',
      image: '/img/card6.png'
    },
    {
      id: 4,
      title: 'Ilustración profesional',
      description: 'Ilustraciones personalizadas, portadas, personajes, escenarios, mapas y arte conceptual adaptados al estilo de tu historia.',
      image: '/img/card2.png'
    },
    {
      id: 5,
      title: 'Diseño de portada',
      description: 'Diseño profesional de portadas para ebook y papel, adaptadas a Amazon KDP y creadas para captar la atención de los lectores.',
      image: '/img/ejemplo.png'
    },
    {
      id: 6,
      title: 'Maquetación profesional',
      description: 'Maquetación para libros impresos y digitales con conversión, optimización para Kindle y formatos preparados para su publicación.',
      image: '/img/ejemplo.png'
    },
    {
      id: 7,
      title: 'Booktrailer',
      description: 'Vídeos promocionales para presentar tu libro en redes sociales con edición profesional, música y efectos visuales.',
      image: '/img/ejemplo.png'
    },
    {
      id: 8,
      title: 'Dossier editorial',
      description: 'Preparamos un dossier profesional con sinopsis, carta de presentación y documentación lista para enviar a editoriales tradicionales.',
      image: '/img/ejemplo.png'
    },
    {
      id: 9,
      title: 'Optimización Amazon y asesorías',
      description: 'Optimización de fichas de Amazon KDP y asesorías personalizadas sobre autopublicación, lanzamiento y marketing para escritores.',
      image: '/img/ejemplo.png'
    },
    {
      id: 10,
      title: 'Marca personal para autores',
      description: 'Diseñamos tu identidad como autor mediante logotipo, imagen corporativa y recursos para potenciar tu presencia profesional.',
      image: '/img/ejemplo.png'
    }
  ];
}
