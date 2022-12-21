import { Car } from "../../Domain/Model/Car/Car";
import { Response } from "../../interfaces";

export default interface ICarDataSource {
    saveCar(data: Car): Response
}