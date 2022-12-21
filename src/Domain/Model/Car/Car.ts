import { YesNo } from "../../../interfaces";

export interface Car {
  id: string;
  brand: string;
  build: string;
  year: number;
  dayPrice: number;
  isFeatured: YesNo;
}
