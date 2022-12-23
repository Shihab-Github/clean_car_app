import { Response } from "../../interfaces";
import { Rent } from "../Model/Rent/Rent";

export interface IRentRepository {
  rentCar(rentInfo: Rent): Response;
  getRents(): Rent[];
  getRentsByUser(): Rent[];
}
