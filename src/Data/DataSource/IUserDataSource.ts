import { User } from "../../Domain/Model/User/User"; 
import { Credentials } from "../../interfaces";

export default interface IUserDataSource {
    getUsers(): User[];
    login(loginData: Credentials): boolean

}