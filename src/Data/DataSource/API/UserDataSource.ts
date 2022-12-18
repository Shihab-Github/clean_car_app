import { User } from "../../../Domain/Model/User/User";
import IUserDataSource from "../IUserDataSource";

export default class UserDataSource implements IUserDataSource {
  getUsers(): User[] {
    const users: User[] = [];
    let user1: User = {
      id: "1",
      firstName: "Sagar",
      lastName: "Mahbub",
      phoneNumber: "01676215472",
      email: "mahbub.razashihab@gmail.com",
    };
    let user2: User = {
      id: "2",
      firstName: "Geralt",
      lastName: "of Rivia",
      phoneNumber: "01676215472",
      email: "gerat.razashihab@gmail.com",
    };
    let user3: User = {
        id: "3",
        firstName: "Triss",
        lastName: "Merigold",
        phoneNumber: "01676215472",
        email: "triss.razashihab@gmail.com",
      };
    users.push(user1);
    users.push(user2);
    users.push(user3);
    return users;
  }
}
