import { useState, useEffect } from "react";
import CarDataSource from "../../../Data/DataSource/API/CarDataSource";
import { CarRepository } from "../../../Data/Repository/CarRepository";
import { Car } from "../../../Domain/Model/Car/Car";
import { GetCars } from "../../../Domain/UseCases/Car/GetCars";

export default function useCar() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const UseCase = new GetCars(new CarRepository(new CarDataSource()));
    let cars = UseCase.getCars();
    setCars(cars);
  }, []);

  return [cars] as const;
}
