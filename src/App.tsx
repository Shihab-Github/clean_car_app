import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Presentation/Login/Login";
import CreateCar from "./Presentation/Cars/CreateCar";
import Customers from "./Presentation/Customers";
import Cars from "./Presentation/Cars";
import Rents from "./Presentation/Rents";

const SignUp = lazy(() => import("./Presentation/SignUp/SignUp"));
const EmployeeLanding = lazy(() => import("./Presentation/EmployeeLanding"));
const CustomerLanding = lazy(() => import("./Presentation/CustomerLading"));

function App() {
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
            <Route path="rents" element={<Rents />} />
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
