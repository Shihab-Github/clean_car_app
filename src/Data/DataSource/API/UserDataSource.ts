import { User } from "../../../Domain/Model/User/User";
import { Credentials, Response } from "../../../interfaces";
import IUserDataSource from "../IUserDataSource";
import { getUserList } from "../../../utils/helper";
import observableUserStore from "../../../store/ObservableUserStore";

export default class UserDataSource implements IUserDataSource {
  getUsers(): User[] {
    return observableUserStore.customers;
  }

  _findUser(phoneNumber: number, password: string) {
    let users: User[] = getUserList();
    let existingUser = users.find(
      (x) => Number(x.phoneNumber) === phoneNumber && x.password === password
    );
    if (existingUser) return existingUser;
    return null;
  }

  login(loginData: Credentials): Response {
    let user = this._findUser(loginData.phoneNumber, loginData.password);
    if (loginData.phoneNumber === 11228899 && loginData.password === "123") {
      if (user) observableUserStore.setLoggedInUser(user);
      let response: Response = {
        statusCode: 200,
        successMessage: "Success",
        payload: user,
      };
      return response;
    }

    if (user) {
      let response: Response = {
        statusCode: 200,
        successMessage: "Success",
        payload: user,
      };
      observableUserStore.setLoggedInUser(user);
      return response;
    } else {
      let response: Response = {
        statusCode: 400,
        errorMessage: "User not found",
      };
      return response;
    }
  }

  signUp(data: User): Response {
    if(data.type === 'customer'){
      observableUserStore.addCustomer(data)
    }else {
      observableUserStore.addEmployee(data)
    }
    let response: Response = {
      statusCode: 201,
      successMessage: "User has been created Successfully",
      payload: data,
    };
    return response;
  }
}
