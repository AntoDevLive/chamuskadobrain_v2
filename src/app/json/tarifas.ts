import { ITarifa } from "../interfaces/tarifa";

export const tarifasJson: ITarifa[] = [
  {
    id: 1,
    slug: 'publicacion-en-amazon',
    servicio: 'Publicación en Amazon',
    slogan: 'Publica tu libro sin complicaciones. Nosotros nos encargamos de TODO el proceso técnico.',
    descripcion:
      'Servicio completo de autopublicación en Amazon KDP para autores que quieren publicar de manera profesional.',
    incluye: [
      'Preparación del manuscrito',
      'Maquetación para papel',
      'Conversión y maquetación para ebook',
      'Configuración del proyecto en Amazon KDP',
      'Subida y publicación del libro',
      'Configuración del ISBN de Amazon cuando proceda',
      'Revisión técnica del proyecto antes de publicar',
      'Asesoramiento durante todo el proceso',
      'Difusión inicial en redes sociales y web de Chamuskado Brain'
    ],
    tarifas: [
      { concepto: 'Hasta 50 páginas', precio: '280 € + IVA' },
      { concepto: '51 a 100 páginas', precio: '320 € + IVA' },
      { concepto: '101 a 200 páginas', precio: '340 € + IVA' },
      { concepto: '201 a 300 páginas', precio: '400 € + IVA' },
      { concepto: '301 a 400 páginas', precio: '440 € + IVA' },
      { concepto: '401 a 500 páginas', precio: '480 € + IVA' },
      { concepto: '501 a 600 páginas', precio: '520 € + IVA' },
      { concepto: 'Más de 600 páginas', precio: 'Presupuesto personalizado' }
    ],
    noIncluye: [
      'Corrección ortotipográfica',
      'Corrección de estilo',
      'Informe de lectura',
      'Ilustraciones',
      'Campañas publicitarias',
      'Garantías de ventas o posicionamiento'
    ]
  },

  {
    id: 2,
    slug: 'correccion-profesional',
    servicio: 'Corrección profesional',
    slogan: 'Tu historia merece estar escrita para brillar.',
    descripcion:
      'Corrección ortotipográfica y de estilo respetando siempre la voz del autor.',
    incluye: [
      'Ortografía',
      'Gramática',
      'Puntuación',
      'Erratas',
      'Uniformidad tipográfica',
      'Revisión de diálogos y formatos',
      'Eliminación de repeticiones',
      'Mejora de la fluidez narrativa',
      'Claridad y legibilidad',
      'Mejora del ritmo',
      'Reestructuración de frases complejas',
      'Conservación de la voz y personalidad del autor'
    ],
    tarifas: [
      {
        concepto: 'Obras superiores a 4.000 palabras',
        precio: '0,015 €/palabra + IVA'
      },
      {
        concepto: 'Obras inferiores a 4.000 palabras',
        precio: '0,025 €/palabra + IVA'
      }
    ],
    observaciones: [
      'Presupuesto gratuito y sin compromiso en menos de 48 horas.'
    ]
  },

  {
    id: 3,
    slug: 'informe-de-lectura',
    servicio: 'Informe de lectura',
    slogan: 'Descubre el verdadero potencial de tu manuscrito.',
    descripcion:
      'Análisis editorial profesional para mejorar la calidad y viabilidad comercial de tu obra.',
    incluye: [
      'Valoración global del manuscrito',
      'Análisis de personajes',
      'Análisis de estructura narrativa',
      'Análisis del ritmo',
      'Coherencia argumental',
      'Fortalezas de la obra',
      'Aspectos mejorables',
      'Público objetivo',
      'Posicionamiento comercial',
      'Recomendaciones editoriales'
    ],
    tarifas: [
      {
        concepto: 'Hasta 20.000 palabras',
        precio: '140 € + IVA'
      },
      {
        concepto: '20.000 - 50.000 palabras',
        precio: '220 € + IVA'
      },
      {
        concepto: '50.000 - 80.000 palabras',
        precio: '290 € + IVA'
      },
      {
        concepto: 'Más de 80.000 palabras',
        precio: '370 € + IVA'
      }
    ],
    observaciones: [
      'No es un lector beta ni una reseña. Es una herramienta profesional de análisis editorial.'
    ]
  },

  {
    id: 4,
    slug: 'ilustracion-profesional',
    servicio: 'Ilustración profesional',
    slogan: 'Dale imagen a tu imaginación.',
    descripcion:
      'Servicio de ilustración profesional adaptado a cada proyecto.',
    incluye: [
      'Ilustraciones para novelas',
      'Portadas ilustradas',
      'Personajes',
      'Escenarios',
      'Mapas de fantasía',
      'Ilustraciones interiores',
      'Libros infantiles',
      'Material promocional',
      'Concept art',
      'Dibujo tradicional',
      'Ilustración mediante IA personalizada'
    ],
    tarifas: [
      {
        concepto: 'Proyecto personalizado',
        precio: 'Presupuesto personalizado'
      }
    ]
  },

  {
    id: 5,
    slug: 'diseno-de-portada',
    servicio: 'Diseño de portada',
    slogan:
      'Los lectores juzgan un libro por su portada. Haz que la tuya destaque.',
    descripcion:
      'Diseño profesional para ebook y papel adaptado a Amazon KDP.',
    incluye: [
      'Diseño personalizado',
      'Versión para ebook',
      'Versión para papel',
      'Lomo',
      'Contraportada',
      'Preparación para Amazon KDP'
    ],
    tarifas: [
      {
        concepto: 'Portada Ebook',
        precio: '55 € + IVA'
      },
      {
        concepto: 'Portada Papel',
        precio: '75 € + IVA'
      },
      {
        concepto: 'Portada ilustrada',
        precio: 'Presupuesto personalizado'
      },
      {
        concepto: 'Versión ebook al contratar portada papel',
        precio: '40 € + IVA',
        nota: 'Precio especial'
      }
    ]
  },

  {
    id: 6,
    slug: 'maquetacion-profesional',
    servicio: 'Maquetación profesional',
    slogan:
      'La diferencia entre un manuscrito y un libro profesional listo para ver la luz.',
    descripcion:
      'Maquetación profesional para impresión y formato digital.',
    incluye: [
      'Maquetación para papel',
      'Maquetación para ebook',
      'Conversión de formatos',
      'Optimización para Kindle',
      'Formatos personalizados'
    ],
    tarifas: [
      {
        concepto: 'Papel',
        precio: '0,80 €/página + IVA'
      },
      {
        concepto: 'Ebook',
        precio: '0,60 €/página + IVA'
      },
      {
        concepto: 'Ebook junto con papel',
        precio: '0,45 €/página + IVA',
        nota: 'Precio especial'
      }
    ]
  },

  {
    id: 7,
    slug: 'booktrailer',
    servicio: 'Booktrailer',
    slogan: 'Haz que tu historia cobre vida antes de ser leída.',
    descripcion:
      'Vídeo promocional para presentar tu libro en redes sociales.',
    incluye: [
      'Edición profesional',
      'Formato horizontal',
      'Formato vertical',
      'Música',
      'Efectos visuales',
      'Publicación en canales de Chamuskado Brain'
    ],
    tarifas: [
      {
        concepto: 'Booktrailer',
        precio: '85 € + IVA'
      },
      {
        concepto: 'Booktrailer contratando el pack Amazon',
        precio: '65 € + IVA'
      }
    ]
  },

  {
    id: 8,
    slug: 'dossier-editorial',
    servicio: 'Dossier editorial',
    slogan:
      'Presenta tu obra como lo haría un profesional del sector.',
    descripcion:
      'Documento profesional para presentar tu obra a editoriales.',
    incluye: [
      'Sinopsis profesional',
      'Carta de presentación',
      'Presentación comercial',
      'Posicionamiento editorial',
      'Biografía del autor',
      'Documento listo para enviar'
    ],
    tarifas: [
      {
        concepto: 'Dossier editorial',
        precio: '70 € + IVA'
      }
    ],
    observaciones: [
      'No garantiza la aceptación de la obra por parte de una editorial.'
    ]
  },

  {
    id: 9,
    slug: 'optimizacion-amazon-y-asesorias',
    servicio: 'Optimización Amazon y asesorías',
    slogan: 'Publicar es solo el primer paso.',
    descripcion:
      'Optimización de fichas de Amazon KDP y asesorías personalizadas.',
    incluye: [
      'Auditoría de ficha Amazon',
      'Optimización SEO de Amazon',
      'Categorías',
      'Palabras clave',
      'Descripción optimizada',
      'Estrategia de precios',
      'Asesoría sobre Amazon KDP',
      'Autopublicación',
      'Marketing para escritores'
    ],
    tarifas: [
      {
        concepto: 'Auditoría de ficha Amazon',
        precio: '40 € + IVA'
      },
      {
        concepto: 'Optimización de ficha Amazon',
        precio: '50 € + IVA'
      },
      {
        concepto: 'Asesoría personalizada',
        precio: '40 €/hora + IVA'
      }
    ]
  },

  {
    id: 10,
    slug: 'marca-personal-para-autores',
    servicio: 'Diseño de marca personal para autores',
    slogan: 'Tu nombre también es tu sello.',
    descripcion:
      'Construye una identidad profesional para destacar como autor.',
    incluye: [
      'Logotipo personalizado',
      'Adaptación para redes sociales',
      'Imagen corporativa básica',
      'Recursos para web y promoción'
    ],
    tarifas: [
      {
        concepto: 'Marca personal para autores',
        precio: '60 € + IVA'
      }
    ]
  }
];