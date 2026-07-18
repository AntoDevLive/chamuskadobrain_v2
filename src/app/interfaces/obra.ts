export interface IObra {
  id: number;
  images: {
    front: string,
    back?: string
  },
  title: string;
  synopsis: string;
  amazonUrl: string;
  features: {
    label: string;
    value: string;
  }[];
}