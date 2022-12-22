import { makeObservable, observable, action } from "mobx";
import { Car } from "../Domain/Model/Car/Car";

class ObservableCarStore {
  private static _instance: ObservableCarStore;
  cars: Car[] = [];

  constructor() {
    makeObservable(this, {
      cars: observable,
      addCar: action,
    });
  }

  public static getInstance(): ObservableCarStore {
    if (!ObservableCarStore._instance) {
      ObservableCarStore._instance = new ObservableCarStore();
    }

    return ObservableCarStore._instance;
  }

  addCar(car: Car) {
    this.cars.push(car);
  }
}

const observableCarStore = ObservableCarStore.getInstance();
Object.freeze(observableCarStore);
export default observableCarStore;

// export default ObservableCarStore;
