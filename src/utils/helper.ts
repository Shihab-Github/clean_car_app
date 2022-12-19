import { UserType } from "../interfaces";

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
