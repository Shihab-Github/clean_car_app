import { Response } from "../../interfaces";
import { Car } from "../Model/Car/Car";

export interface ICarRepository {
  saveCar(data: Car): Response;
  getCars(): Car[];
}
