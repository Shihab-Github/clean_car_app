import { Menu } from "../../interfaces";

export const employerMenu: Menu[] = [
  {
    title: "Customers",
    path: "/employee/customers",
  },
  {
    title: "Add New Car",
    path: "/employee/newCar",
  },
  {
    title: "Cars",
    path: "/employee/cars",
  },
  {
    title: "Rents",
    path: "/employee/rents",
  },
];

export const customerMenu: Menu[] = [
  {
    title: "Cars",
    path: "/customer/cars",
  },
  {
    title: 'My Rent History',
    path: "/customer/myrents"
  }
];
