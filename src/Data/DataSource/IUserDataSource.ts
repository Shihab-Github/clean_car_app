import { User } from "../../Domain/Model/User/User"; 

export default interface IUserDataSource {
    getUsers(): User[]
}