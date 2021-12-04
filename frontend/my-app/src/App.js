import React from "react";
import { useSelector } from "react-redux";
import SignupScreen from "./Screens/SignupScreen";
import SigninScreen from "./Screens/SigninScreen";
import HomeScreen from "./Screens/HomeScreen";
import RentalInfo from "./Screens/RentalInfo";
import "./App.css";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import UserProfileScreen from "./Screens/UserProfileScreen";
import HostProfileScreen from "./Screens/HostProfileScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/rentalinfo/*" element={<RentalInfo />} />
          <Route path="/user/*" element={<UserProfileScreen />} />
          <Route path="/host/*" element={<HostProfileScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
