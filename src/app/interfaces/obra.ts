import { IValoracion } from "./valoracion";

export interface IObra {
  id: number;
  slug: string;
  images: {
    front: string,
    back?: string
  },
  title: string;
  synopsis: string;
  amazonUrl: string;
  booktrailerUrl?: string;
  valoraciones: IValoracion[];
  features: {
    label: string;
    value: string;
  }[];
}