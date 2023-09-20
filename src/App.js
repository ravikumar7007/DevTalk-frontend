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
import ProfileForm from "./components/profile-forms/ProfileForm";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profile/Profiles";
import Profile from "./components/profile-single/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post-single/Post";
import NotFound from "./components/layout/NotFound";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
    dispatch(loadUser);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Alert />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={<Dashboard />} />}
        />
        <Route
          path="/create-profile"
          element={<PrivateRoute component={<ProfileForm />} />}
        />
        <Route
          path="/edit-profile"
          element={<PrivateRoute component={<ProfileForm />} />}
        />
        <Route
          path="/add-experience"
          element={<PrivateRoute component={<AddExperience />} />}
        />
        <Route
          path="/add-education"
          element={<PrivateRoute component={<AddEducation />} />}
        />
        <Route path="/posts" element={<PrivateRoute component={<Posts />} />} />
        <Route
          path="/post/:id"
          element={<PrivateRoute component={<Post />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
