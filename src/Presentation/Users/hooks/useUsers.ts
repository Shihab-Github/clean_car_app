import { useEffect, useState } from "react";
import UserDataSource from "../../../Data/DataSource/API/UserDataSource";
import { UserRepository } from "../../../Data/Repository/UserRepository";
import { User } from "../../../Domain/Model/User/User";
import { GetUsers } from "../../../Domain/UseCases/User/GetUsers";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const useCase = new GetUsers(new UserRepository(new UserDataSource()));
    const users = useCase.invoke()
    setUsers(users)
  }, []);

  return [users];
}
