import CreateCar from "..";
import CarDataSource from "../../../../Data/DataSource/API/CarDataSource";
import { CarRepository } from "../../../../Data/Repository/CarRepository";
import { SaveCar } from "../../../../Domain/UseCases/Car/SaveCar";

export default function useCreateCar() {
  const saveCar = (carInfo: any) => {
    console.log("car info: ", carInfo);
    const UseCase = new SaveCar(new CarRepository(new CarDataSource()));
    return UseCase.saveCar(carInfo);
  };

  return [saveCar] as const;
}
