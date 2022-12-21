import { Response } from "../../../interfaces";
import { Car } from "../../Model/Car/Car";
import { ICarRepository } from "../../Repository/ICarRepository";

export interface SaveCarUseCase {
  saveCar: (data: Car) => Response;
}

export class SaveCar implements SaveCarUseCase {
  private carRepo: ICarRepository;
  constructor(_carRepo: ICarRepository) {
    this.carRepo = _carRepo;
  }

  saveCar(data: Car): Response {
    return this.carRepo.saveCar(data);
  }
}
