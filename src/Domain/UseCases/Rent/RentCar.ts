import { Response } from "../../../interfaces";
import { Rent } from "../../Model/Rent/Rent";
import { IRentRepository } from "../../Repository/IRentRepository";

export interface RentCarUseCase {
  rentCar: (rentInfo: Rent) => Response;
}

export class RentCar implements RentCarUseCase {
  private rentRepo: IRentRepository;
  constructor(_rentRepo: IRentRepository) {
    this.rentRepo = _rentRepo;
  }

  rentCar(rentInfo: Rent): Response {
    return this.rentRepo.rentCar(rentInfo);
  }
}
