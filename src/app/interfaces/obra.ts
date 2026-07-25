import { IValoracion } from "./valoracion";

export interface IObra {
  id: number;
  images: {
    front: string,
    back?: string
  },
  title: string;
  synopsis: string;
  amazonUrl: string;
  valoraciones: IValoracion[];
  features: {
    label: string;
    value: string;
  }[];
}