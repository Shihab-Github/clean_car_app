import { makeObservable, observable, action } from "mobx";
import { User } from "../Domain/Model/User/User";
import { UserType } from "../interfaces";

class ObservableUserStore {
  private static _instance: ObservableUserStore;
  loggedInUser: User | null = null;
  customers: User[] = [];
  employees: User[] = [];

  constructor() {
    makeObservable(this, {
      loggedInUser: observable,
      customers: observable,
      setLoggedInUser: action,
    });
    let admin: User = {
      id: crypto.randomUUID(),
      type: UserType.Employee,
      firstName: "Super",
      lastName: "Admin",
      email: "superadmin@app.co",
      phoneNumber: 11228899,
      password: "123",
    };
    this.employees.push(admin);
  }

  public static getInstance(): ObservableUserStore {
    if (!ObservableUserStore._instance) {
      ObservableUserStore._instance = new ObservableUserStore();
    }

    return ObservableUserStore._instance;
  }

  addCustomer(user: User) {
    this.customers.push(user);
  }

  addEmployee(user: User) {
    this.employees.push(user);
  }

  setLoggedInUser(user: User | null) {
    this.loggedInUser = user;
  }
}

const observableUserStore = ObservableUserStore.getInstance();
Object.freeze(observableUserStore);
export default observableUserStore;
