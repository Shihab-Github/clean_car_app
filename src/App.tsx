import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { User } from "./Domain/Model/User/User";
import { v4 as uuid } from "uuid";
import Login from "./Presentation/Login/Login";
import CreateCar from "./Presentation/Cars/CreateCar";
import Customers from "./Presentation/Customers";
import Cars from "./Presentation/Cars";
import { UserType } from "./interfaces";

const SignUp = lazy(() => import("./Presentation/SignUp/SignUp"));
const EmployeeLanding = lazy(() => import("./Presentation/EmployeeLanding"));
const CustomerLanding = lazy(() => import("./Presentation/CustomerLading"));

function App() {
  useEffect(() => {
    let admin: User = {
      id: uuid(),
      type: UserType.Employee,
      firstName: "Super",
      lastName: "Admin",
      email: "superadmin@app.co",
      phoneNumber: 11228899,
      password: "123",
    };
    let users: User[] = [];
    users.push(admin);
    localStorage.setItem("users", JSON.stringify(users));
  }, []);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/employee" element={<EmployeeLanding />}>
            <Route path="customers" element={<Customers />} />
            <Route path="cars" element={<Cars />} />
            <Route path="newCar" element={<CreateCar />} />
          </Route>
          <Route path="/customer" element={<CustomerLanding />}>
            <Route path="cars" element={<Cars />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
