import { Credentials } from "../../../interfaces";

export default function useLogin() {
  function login(cred: Credentials) {
    console.log("cred: ", cred);
  }

  return [{ login }];
}
