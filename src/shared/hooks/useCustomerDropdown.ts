import { useEffect, useState } from "react";
import UserDataSource from "../../Data/DataSource/API/UserDataSource";
import { UserRepository } from "../../Data/Repository/UserRepository";
import { GetUsers } from "../../Domain/UseCases/User/GetUsers";
import { DropDownOption } from "../../interfaces";

export default function useCustomerDropdown() {
  const [customers, setCustomers] = useState<DropDownOption[]>([]);

  useEffect(() => {
    const UseCase = new GetUsers(new UserRepository(new UserDataSource()));
    const users = UseCase.invoke();
    let options: DropDownOption[] = [];
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      let option: DropDownOption = {
        title: user.firstName + " " + user.lastName,
        value: user.id,
      };
      options.push(option);
    }
    setCustomers((prev) => [...prev, ...options]);
  }, []);

  return [customers] as const;
}
