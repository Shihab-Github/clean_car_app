import { useEffect, useState } from "react";
import { RentDataSource } from "../../../Data/DataSource/API/RentDataSource";
import { RentRepository } from "../../../Data/Repository/RentRepository";
import { Rent } from "../../../Domain/Model/Rent/Rent";
import { GetRents } from "../../../Domain/UseCases/Rent/GetRents";

export default function useFetchRents() {
  const [rentList, setRentList] = useState<Rent[]>([]);

  useEffect(() => {
    const UseCase = new GetRents(new RentRepository(new RentDataSource()));
    const rents = UseCase.getRents();
    setRentList((prev) => [...prev, ...rents]);
  }, []);

  return [rentList] as const
}
