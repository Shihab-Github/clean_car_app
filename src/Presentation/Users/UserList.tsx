import React from "react";
import useUsers from "./hooks/useUsers";

export default function UserList() {
  const [users] = useUsers();

  console.log("users: ", users);

  return <div>UserList</div>;
}
