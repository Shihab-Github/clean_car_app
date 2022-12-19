import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Presentation/Login/Login";

const SignUp = lazy(() => import("./Presentation/SignUp/SignUp"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
