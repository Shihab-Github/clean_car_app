import { Car } from "../../Model/Car/Car";
import { ICarRepository } from "../../Repository/ICarRepository";

export interface GetCarsUseCase {
  getCars: () => Car[];
}

export class GetCars implements GetCarsUseCase {
  private careRepo: ICarRepository;

  constructor(_carRepo: ICarRepository) {
    this.careRepo = _carRepo;
  }

  getCars(): Car[] {
    return this.careRepo.getCars();
  }
}
