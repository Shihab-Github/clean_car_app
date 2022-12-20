import { v4 as uuidv4 } from "uuid";
import { Response, SignUpProps, UserType } from "../../../interfaces";
import { User } from "../../Model/User/User";
import { IUserRepository } from "../../Repository/IUserRepository";

export interface SignUpUseCase {
  signUp: (data: SignUpProps) => Response;
}

export class SignUp implements SignUpUseCase {
  private userRepo: IUserRepository;
  constructor(_userRepo: IUserRepository) {
    this.userRepo = _userRepo;
  }

  signUp(data: SignUpProps) {
    const { firstName, lastName, phoneNumber, type, password, password2 } =
      data;

    if (password === password2) {
      let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
      let existingUser = users.filter((x) => x.phoneNumber === phoneNumber);
      if (existingUser.length > 0) {
        let response: Response = {
          statusCode: 400,
          errorMessage: "Phone Number already exists",
        };
        return response;
      }
    } else {
      let response: Response = {
        statusCode: 400,
        errorMessage: "Passwords do not match",
      };
      return response;
    }

    let newUser: User = {
      firstName,
      lastName,
      phoneNumber,
      type: type as UserType,
      password,
      id: uuidv4(),
    };
    return this.userRepo.signUp(newUser);
  }
}
