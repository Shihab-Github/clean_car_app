import { Rent } from "../../Model/Rent/Rent";
import { IRentRepository } from "../../Repository/IRentRepository";

export interface GetRentUseCase {
  getRents: () => Rent[];
}

export class GetRents implements GetRentUseCase {
  private rentRepo: IRentRepository;
  constructor(_rentRepo: IRentRepository) {
    this.rentRepo = _rentRepo;
  }

  getRents(): Rent[] {
    return this.rentRepo.getRents();
  }

  getRentsByUser(): Rent[] {
    return this.rentRepo.getRentsByUser();
  }
}
