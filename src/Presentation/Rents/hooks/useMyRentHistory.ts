import { useState, useEffect } from "react";
import { RentDataSource } from "../../../Data/DataSource/API/RentDataSource";
import { RentRepository } from "../../../Data/Repository/RentRepository";
import { Rent } from "../../../Domain/Model/Rent/Rent";
import { GetRents } from "../../../Domain/UseCases/Rent/GetRents";

export default function useMyRentHistory() {
  const [myRents, setMyRents] = useState<Rent[]>([]);

  useEffect(() => {
    const UseCase = new GetRents(new RentRepository(new RentDataSource()));
    const result = UseCase.getRentsByUser();
    setMyRents((prev) => [...prev, ...result]);
  }, []);

  return [myRents] as const;
}
