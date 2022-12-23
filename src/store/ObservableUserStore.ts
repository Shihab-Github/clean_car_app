import { makeObservable, observable, action } from "mobx";
import { User } from "../Domain/Model/User/User";

class ObservableUserStore {
  private static _instance: ObservableUserStore;
  loggedInUser: User | null = null;

  constructor() {
    makeObservable(this, {
      loggedInUser: observable,
      setLoggedInUser: action,
    });
  }

  public static getInstance(): ObservableUserStore {
    if (!ObservableUserStore._instance) {
      ObservableUserStore._instance = new ObservableUserStore();
    }

    return ObservableUserStore._instance;
  }

  setLoggedInUser(user: User | null) {
    this.loggedInUser = user;
  }
}

const observableUserStore = ObservableUserStore.getInstance();
Object.freeze(observableUserStore);
export default observableUserStore;
