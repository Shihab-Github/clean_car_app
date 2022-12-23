import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Rent } from "../../../Domain/Model/Rent/Rent";
import { Car } from "../../../Domain/Model/Car/Car";
import observableUserStore from "../../../store/ObservableUserStore";
import { v4 as uuidv4 } from "uuid";
import { RentRepository } from "../../../Data/Repository/RentRepository";
import { RentCar } from "../../../Domain/UseCases/Rent/RentCar";
import { RentDataSource } from "../../../Data/DataSource/API/RentDataSource";
import { Response } from "../../../interfaces";

export default function useRent(car: Car) {
  const [showRentForm, setShowRentForm] = useState(false);
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [price, setPrice] = useState<number>(car.dayPrice);

  const toggleRentForm = () => setShowRentForm((prev) => !prev);

  const handleStartDate = (newValue: Dayjs | null) => {
    setStartDate(newValue);
    if (endDate && newValue) {
      let diff = endDate.diff(newValue, "days") + 1;
      setPrice(diff * car.dayPrice);
    }
  };

  const handleEndDate = (newValue: Dayjs | null) => {
    setEndDate(newValue);
    if (startDate && newValue) {
      let diff = newValue.diff(startDate, "days") + 1;
      setPrice(diff * car.dayPrice);
    }
  };

  const rentCar = () => {
    if (observableUserStore.loggedInUser?.type === "customer") {
      let rentInfo: Rent = {
        id: uuidv4(),
        car,
        price: price,
        startDate: startDate ? startDate : dayjs(),
        endDate: endDate ? endDate : dayjs(),
        user: observableUserStore.loggedInUser,
      };
      const UseCase = new RentCar(new RentRepository(new RentDataSource()));
      let response = UseCase.rentCar(rentInfo);
      return response;
    } else {
      let response: Response = {
        statusCode: 400,
        errorMessage: "Failed to rent car",
      };
      return response;
    }
  };

  return {
    startDate,
    endDate,
    price,
    showRentForm,
    toggleRentForm,
    handleStartDate,
    handleEndDate,
    rentCar,
  };
}
