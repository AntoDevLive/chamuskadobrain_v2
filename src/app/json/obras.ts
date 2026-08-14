import { IObra } from "../interfaces/obra";
import { valoracionesCartasABruno, valoracionesMalababa } from "./valoracion";

export const obrasJson: IObra[] = [
  {
    id: 1,
    slug: 'malababa',
    images: {
      front: '/img/malababa.jpg',
      back: '/img/malababa-back.jpg',
    },
    title: 'Malababa',
    synopsis: `Un prestigioso notario y un policía han sido invitados y caminan bajo la lumbre cuidadosamente por la finca de Doña Amelia de Blasco. Un pie dudoso tras otro hacia la imponente mansión, sin imaginar la velada que van a presenciar.
    Esa mujer, odiada y temida por toda la provincia, arrogante, irrespetuosa y egoísta, declara que esa misma noche desvelará, durante la cena que ha preparado, quiénes serán sus futuros herederos.
    Los familiares, amigos y el servicio tienen la posibilidad de cambiar sus vidas si son los elegidos. Y harán cualquier cosa por conseguirlo.
    Pero la tía Amelia tiene un mal presentimiento.
    ¿Provocará esto algún cambio de última hora en sus planes? ¿Quién es el verdadero merecedor de la herencia?
    Que el gramófono empiece a sonar.`,
    amazonUrl: 'https://www.amazon.es/Malababa-Paloma-Castizo/dp/8409672952/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=85OIL1WK9TS0&dib=eyJ2IjoiMSJ9.y3PJoP9KSis31T3tMmw5pg.nxOpzpLYhDTX6pBteVcLzPprKj1JJWPemC_izEWuszE&dib_tag=se&keywords=malababa+paloma+castizo&qid=1784132927&sprefix=malababa+paloma+castizo%2Caps%2C69&sr=8-1',
    booktrailerUrl: 'https://www.youtube.com/embed/4A4CfHWpBCs',
    valoraciones: valoracionesMalababa,
    features: [
      { label: 'Editorial', value: 'Chamuskado Brain' },
      { label: 'Fecha de publicación', value: '27 enero 2025' },
      { label: 'Idioma', value: 'Español' },
      { label: 'Páginas', value: '386' },
      { label: 'ISBN-10', value: '8409672952' },
      { label: 'ISBN-13', value: '978-8409672950' },
      { label: 'Edad recomendada', value: 'De 14 a 18 años' },
      { label: 'Peso', value: '572 g' },
      { label: 'Dimensiones', value: '13.97 × 2.95 × 21.59 cm' },
      { label: 'Ranking Amazon', value: 'nº 708.119 en Libros' },
      { label: 'Ficción negra', value: 'nº 986' },
      { label: 'Thrillers psicológicos', value: 'nº 6.313' },
      { label: 'Misterios', value: 'nº 32.511' },
      { label: 'Valoración', value: '5,0/5 ⭐ (5 opiniones)' }
    ]
  },

  {
    id: 2,
    slug: 'cartas-a-bruno',
    images: {
      front: '/img/cartas-a-bruno.jpg',
      back: '/img/cartas-a-bruno-back.jpg',
    },
    title: 'Cartas a Bruno',
    synopsis: `Una huida. Un viaje. Un motivo olvidado que la ha llevado hasta el recóndito pueblecito de Portrush, al norte de Irlanda. Una cadena de misteriosas cartas y sucesos siniestros tambalearán su realidad, obligándola a buscar una escapatoria.
    Un final que ya estaba escrito.
    ¿Qué ha ocurrido con la Señorita Lain?`,
    amazonUrl: 'https://www.amazon.es/Cartas-Bruno-Paloma-Castizo-P%C3%A9rez/dp/8409176149/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=32ERRFM67S2CC&dib=eyJ2IjoiMSJ9.w7fw72FHxVkD9CTTsGsujw.cg-mzPwVVNzBiQurBgb9NP1jCBMKzVwwE1L2F1QmpU0&dib_tag=se&keywords=cartas+a+bruno+paloma+castizo&qid=1784132918&sprefix=cartas+a+bruno+paloma+castizo%2Caps%2C75&sr=8-1#averageCustomerReviewsAnchor',
    valoraciones: valoracionesCartasABruno,
    features: [
      { label: 'Editorial', value: 'Paloma Castizo - Independiente' },
      { label: 'Fecha de publicación', value: '27 diciembre 2019' },
      { label: 'Idioma', value: 'Español' },
      { label: 'Páginas', value: '196' },
      { label: 'ISBN-10', value: '8409176149' },
      { label: 'ISBN-13', value: '978-8409176144' },
      { label: 'Peso', value: '354 g' },
      { label: 'Dimensiones', value: '15.24 × 1.24 × 22.86 cm' },
      { label: 'Ranking Amazon', value: 'nº 635.573 en Libros' },
      { label: 'Categoría', value: 'nº 146.972 en Ficción por género' },
      { label: 'Valoración', value: '5,0/5 ⭐ (10 opiniones)' }
    ]
  }
];