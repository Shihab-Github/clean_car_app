import { Rent } from "../../../Domain/Model/Rent/Rent";
import { Response } from "../../../interfaces";
import observableCarStore from "../../../store/ObservableCarStore";
import observableRentStore from "../../../store/ObservableRentStore";
import observableUserStore from "../../../store/ObservableUserStore";
import { IRentDataSource } from "../IRentDataSource";

export class RentDataSource implements IRentDataSource {
  rentCar(rentInfo: Rent): Response {
    observableRentStore.rentCar(rentInfo);
    observableCarStore.markCarAsRented(rentInfo.car.id);
    let response: Response = {
      statusCode: 201,
      successMessage: "Car Rented Successfully",
    };
    return response;
  }

  getRents(): Rent[] {
    return observableRentStore.rentList;
  }

  getRentsByUser(): Rent[] {
    let rentsByUser = observableRentStore.rentList.filter(
      (x) => x.user.id === observableUserStore.loggedInUser?.id
    );
    return rentsByUser;
  }
}
