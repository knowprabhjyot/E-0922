import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLogin from "./pages/admin/admin-login/adminLogin";
import AdminSignup from "./pages/admin/admin-signup/adminSignup";
import Home from "./pages/home/home";
import UserHome from "./pages/user/user-home/UserHome";
import UserLogin from "./pages/user/user-login/user-login";
import UserSignup from "./pages/user/user-signup/user-signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* USER FLOW */}
        {/* Users can manage their own todos */}
        <Route path="/user/login" element={<UserLogin />} />

        {/* TODO */}
        <Route path="/user" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/home" element={<UserHome />} />

        {/* ADMIN FLOW  */}
        {/* Admin will manage all the users */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

      </Routes>
    </div>
  );
}

export default App;
