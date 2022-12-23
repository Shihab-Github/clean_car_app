import {useState, useEffect} from 'react'
import UserDataSource from '../../../Data/DataSource/API/UserDataSource';
import { UserRepository } from '../../../Data/Repository/UserRepository';
import { User } from '../../../Domain/Model/User/User';
import { GetUsers } from '../../../Domain/UseCases/User/GetUsers';

export default function useCustomers() {
  const [customers, setCustomers] = useState<User[]>([])

  useEffect(() => {
    const UseCase = new GetUsers(new UserRepository(new UserDataSource()))
    let result = UseCase.invoke()
    setCustomers((prev) => [...prev, ...result])
  }, [])
  

  return [customers] as const;
}
