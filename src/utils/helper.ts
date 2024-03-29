import CarDataSource from "../Data/DataSource/API/CarDataSource";
import { UserType, YesNo } from "../interfaces";

export function getUserTypes() {
  const options = [];
  for (const [key, value] of Object.entries(UserType)) {
    options.push({
      title: key,
      value: value,
    });
  }
  return options;
}

export function getYesNoValues() {
  const options = [];
  for (const [key, value] of Object.entries(YesNo)) {
    options.push({
      title: key,
      value: value,
    });
  }
  return options;
}

export function getUserList() {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  return users;
}
