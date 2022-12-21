import { Car } from "../../../Domain/Model/Car/Car";
import { Response } from "../../../interfaces";
import ICarDataSource from "../ICarDataSource";
import { getCarList } from "../../../utils/helper";

export default class CarDataSource implements ICarDataSource {
  saveCar(data: Car): Response {
    let cars = getCarList();
    cars.push(data);
    let response: Response = {
      statusCode: 201,
      successMessage: "A new car has been added ",
    };
    return response
  }
}
