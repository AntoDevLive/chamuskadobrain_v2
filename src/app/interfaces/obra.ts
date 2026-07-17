export interface IObra {
  id: number;
  image: string;
  title: string;
  synopsis: string;
  amazonUrl: string;
  features: {
    label: string;
    value: string;
  }[];
}