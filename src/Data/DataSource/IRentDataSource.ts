import { Rent } from "../../Domain/Model/Rent/Rent";
import { Response } from "../../interfaces";

export interface IRentDataSource {
  rentCar(rentInfo: Rent): Response;
  getRents(): Rent[];
}
