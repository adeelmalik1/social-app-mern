import {BrowserRouter as Router, Routes, Route} from  "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Account from "./Components/Account/Account";
import NewPost from "./Components/NewPost/NewPost";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import UserProfile from "./Components/UserProfile/UserProfile";
import Search from "./Components/Search/Search";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";

import './App.css';
import { useEffect } from "react";
import { loadUser } from "./Actions/User";

function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state)=> state.user);
  useEffect(()=> {
    dispatch(loadUser())
  },[])
  return (
    <Router>
         {isAuthenticated && <Header/>}
          <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path="/account"
          element={isAuthenticated ? <Account /> : <Login />}
        />

        <Route
          path="/register"
          element={isAuthenticated ? <Account /> : <Register />}
        />

        <Route
          path="/newpost"
          element={isAuthenticated ? <NewPost /> : <Login />}
        />

        <Route
          path="/update/profile"
          element={isAuthenticated ? <UpdateProfile /> : <Login />}
        />
        <Route
          path="/update/password"
          element={isAuthenticated ? <UpdatePassword /> : <Login />}
        />

        <Route
          path="/forgot/password"
          element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />}
        />

        <Route
          path="/password/reset/:token"
          element={isAuthenticated ? <UpdatePassword /> : <ResetPassword />}
        />

        <Route
          path="/user/:id"
          element={isAuthenticated ? <UserProfile /> : <Login />}
        />

        <Route path="search" element={<Search />} />

        <Route path="*" element={<NotFound />} />
      
          </Routes>
    </Router>
  );
}

export default App;
