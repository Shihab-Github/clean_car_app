import { Car } from "../../../Domain/Model/Car/Car";
import { Response } from "../../../interfaces";
import ICarDataSource from "../ICarDataSource";
import observableCarStore from "../../../store/ObservableCarStore";

export default class CarDataSource implements ICarDataSource {
  saveCar(data: Car): Response {
    observableCarStore.addCar(data);
    let response: Response = {
      statusCode: 201,
      successMessage: "A new car has been added ",
    };
    return response;
  }

  getCars(): Car[] {
    return observableCarStore.cars;
  }
}
