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
    title: 'obrasPage.items.malababa.title',
    synopsis: 'obrasPage.items.malababa.synopsis',
    amazonUrl: 'https://www.amazon.es/Malababa-Paloma-Castizo/dp/8409672952/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=85OIL1WK9TS0&dib=eyJ2IjoiMSJ9.y3PJoP9KSis31T3tMmw5pg.nxOpzpLYhDTX6pBteVcLzPprKj1JJWPemC_izEWuszE&dib_tag=se&keywords=malababa+paloma+castizo&qid=1784132927&sprefix=malababa+paloma+castizo%2Caps%2C69&sr=8-1',
    booktrailerUrl: 'https://www.youtube.com/embed/4A4CfHWpBCs',
    valoraciones: valoracionesMalababa,
    features: [
      { label: 'obrasPage.labels.editorial', value: 'Chamuskado Brain' },
      { label: 'obrasPage.labels.publicationDate', value: '27 enero 2025' },
      { label: 'obrasPage.labels.language', value: 'Español' },
      { label: 'obrasPage.labels.pages', value: '386' },
      { label: 'obrasPage.labels.isbn10', value: '8409672952' },
      { label: 'obrasPage.labels.isbn13', value: '978-8409672950' },
      { label: 'obrasPage.labels.recommendedAge', value: 'De 14 a 18 años' },
      { label: 'obrasPage.labels.weight', value: '572 g' },
      { label: 'obrasPage.labels.dimensions', value: '13.97 × 2.95 × 21.59 cm' },
      { label: 'obrasPage.labels.amazonRanking', value: 'nº 708.119 en Libros' },
      { label: 'obrasPage.labels.blackFiction', value: 'nº 986' },
      { label: 'obrasPage.labels.psychologicalThrillers', value: 'nº 6.313' },
      { label: 'obrasPage.labels.mysteries', value: 'nº 32.511' },
      { label: 'obrasPage.labels.rating', value: '5,0/5 ⭐ (5 opiniones)' }
    ]
  },

  {
    id: 2,
    slug: 'cartas-a-bruno',
    images: {
      front: '/img/cartas-a-bruno.jpg',
      back: '/img/cartas-a-bruno-back.jpg',
    },
    title: 'obrasPage.items.cartas-a-bruno.title',
    synopsis: 'obrasPage.items.cartas-a-bruno.synopsis',
    amazonUrl: 'https://www.amazon.es/Cartas-Bruno-Paloma-Castizo-P%C3%A9rez/dp/8409176149/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=32ERRFM67S2CC&dib=eyJ2IjoiMSJ9.w7fw72FHxVkD9CTTsGsujw.cg-mzPwVVNzBiQurBgb9NP1jCBMKzVwwE1L2F1QmpU0&dib_tag=se&keywords=cartas+a+bruno+paloma+castizo&qid=1784132918&sprefix=cartas+a+bruno+paloma+castizo%2Caps%2C75&sr=8-1#averageCustomerReviewsAnchor',
    valoraciones: valoracionesCartasABruno,
    features: [
      { label: 'obrasPage.labels.editorial', value: 'Paloma Castizo - Independiente' },
      { label: 'obrasPage.labels.publicationDate', value: '27 diciembre 2019' },
      { label: 'obrasPage.labels.language', value: 'Español' },
      { label: 'obrasPage.labels.pages', value: '196' },
      { label: 'obrasPage.labels.isbn10', value: '8409176149' },
      { label: 'obrasPage.labels.isbn13', value: '978-8409176144' },
      { label: 'obrasPage.labels.weight', value: '354 g' },
      { label: 'obrasPage.labels.dimensions', value: '15.24 × 1.24 × 22.86 cm' },
      { label: 'obrasPage.labels.amazonRanking', value: 'nº 635.573 en Libros' },
      { label: 'obrasPage.labels.category', value: 'nº 146.972 en Ficción por género' },
      { label: 'obrasPage.labels.rating', value: '5,0/5 ⭐ (10 opiniones)' }
    ]
  }
];