import { makeObservable, observable, action } from "mobx";
import { Rent } from "../Domain/Model/Rent/Rent";

class ObservableRentStore {
  private static _instance: ObservableRentStore;
  rentList: Rent[] = [];

  constructor() {
    makeObservable(this, {
      rentList: observable,
      rentCar: action,
    });
  }

  public static getInstance(): ObservableRentStore {
    if (!ObservableRentStore._instance) {
      ObservableRentStore._instance = new ObservableRentStore();
    }

    return ObservableRentStore._instance;
  }

  rentCar(rentInfo: Rent) {
    this.rentList.push(rentInfo);
  }
}

const observableRentStore = ObservableRentStore.getInstance();
Object.freeze(observableRentStore);
export default observableRentStore;
