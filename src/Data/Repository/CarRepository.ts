import { Car } from "../../Domain/Model/Car/Car";
import { ICarRepository } from "../../Domain/Repository/ICarRepository";
import { Response } from "../../interfaces";
import CarDataSource from "../DataSource/API/CarDataSource";

export class CarRepository implements ICarRepository {
  dataSource: CarDataSource;

  constructor(_dataSource: CarDataSource) {
    this.dataSource = _dataSource;
  }

  saveCar(data: Car): Response {
    return this.dataSource.saveCar(data);
  }
}
