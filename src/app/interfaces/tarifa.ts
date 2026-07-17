export interface ITarifa {
  id: number;
  servicio: string;
  slogan: string;
  descripcion: string;
  incluye?: string[];
  tarifas: {
    concepto: string;
    precio: string;
    nota?: string;
  }[];
  noIncluye?: string[];
  observaciones?: string[];
}