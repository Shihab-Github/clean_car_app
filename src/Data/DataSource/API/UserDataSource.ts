import { User } from "../../../Domain/Model/User/User";
import { Credentials, Response, SignUpProps } from "../../../interfaces";
import IUserDataSource from "../IUserDataSource";

export default class UserDataSource implements IUserDataSource {
  getUsers(): User[] {
    const users: User[] = [];
    return users;
  }

  login(loginData: Credentials): boolean {
    if (
      loginData.email === "superadmin@app.co" &&
      loginData.password === "12345"
    ) {
      return true;
    }
    return false;
  }

  signUp(data: User): Response {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users))
    let response: Response = {
      statusCode: 201,
      successMessage: "User has been created Successfully",
    };
    return response;
  }
}
