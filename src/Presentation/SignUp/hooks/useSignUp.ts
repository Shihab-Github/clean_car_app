import UserDataSource from "../../../Data/DataSource/API/UserDataSource";
import { UserRepository } from "../../../Data/Repository/UserRepository";
import { SignUp } from "../../../Domain/UseCases/User/SignUp";
import { SignUpProps } from "../../../interfaces";

export default function useSignUp() {
  const signUp = (data: SignUpProps) => {
    console.log("data: ", data);
    const UseCase = new SignUp(new UserRepository(new UserDataSource()))
    const isSuccess = UseCase.signUp(data)
    return isSuccess
  };

  return [{ signUp }] as const;
}
