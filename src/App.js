import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useDispatch } from "react-redux";

import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import { useEffect } from "react";

import { loadUser } from "./actions/auth";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    } 
    dispatch(loadUser)
    
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <Alert />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute component={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
