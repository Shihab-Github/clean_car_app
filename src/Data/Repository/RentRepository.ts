import { Rent } from "../../Domain/Model/Rent/Rent";
import { IRentRepository } from "../../Domain/Repository/IRentRepository";
import { Response } from "../../interfaces";
import { RentDataSource } from "../DataSource/API/RentDataSource";

export class RentRepository implements IRentRepository {
  dataSource: RentDataSource;

  constructor(_dataSource: RentDataSource) {
    this.dataSource = _dataSource;
  }

  rentCar(rentInfo: Rent): Response {
      return this.dataSource.rentCar(rentInfo)
  }

  getRents(): Rent[] {
    return this.dataSource.getRents()
  }

  getRentsByUser(): Rent[] {
    return this.dataSource.getRentsByUser()
  }
}
