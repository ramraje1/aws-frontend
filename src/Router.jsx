// import React, { useEffect } from "react";
// import {useNavigate, useRoutes} from 'react-router-dom'

// // Pages List

// import Profile from "./components/user/Profile";
// import Login from "./components/auth/Login";
// import Signup from "./components/auth/SignUp";
// import Dashboard from "./components/dashboard/Dashboard";

// // Auth Context
// import { AuthContext } from "./authContext";
// import { useContext } from "react";

// const ProjectRoutes = ()=>{
//     const {currentuser, setcurreuntuser} = useContext(AuthContext);
//     const navigate = useNavigate();

//     useEffect(()=>{
//         const userIdFromStorage = localStorage.getItem("userId");

//         if(userIdFromStorage && !currentuser){
//             setcurreuntuser(userIdFromStorage);
//         }

//         if(!userIdFromStorage && !["/auth", "/signup"].includes(window.location.pathname))
//         {
//             navigate("/auth");
//         }

//         if(userIdFromStorage && window.location.pathname=='/auth'){
//             navigate("/");
//         }
//     }, [currentuser, navigate, setcurreuntuser]);

//     let element = useRoutes([
//         {
//             path:"/",
//             element:<Dashboard/>
//         },
//         {
//             path:"/auth",
//             element:<Login/>
//         },
//         {
//             path:"/signup",
//             element:<Signup/>
//         },
//         {
//             path:"/profile",
//             element:<Profile/>
//         }
//     ]);

//     return element;
// }

// export default ProjectRoutes;
import React, { useEffect, useContext } from "react";
import { Routes,Route, useNavigate } from "react-router-dom";

// Pages List
import Profile from "./components/user/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";

// Auth Context
import { AuthContext } from "./authContext";

const ProjectRoutes = () => {
  const { currentUser } = useContext(AuthContext); // Fixed variable names
  const navigate = useNavigate();

  useEffect(() => {
    // const userIdFromStorage = localStorage.getItem("userId");

    if (currentUser) {
    //   setCurrentUser(userIdFromStorage); // Set the current user if found in storage
      if (window.location.pathname === "/auth") {
        navigate("/"); // Redirect to Dashboard if already logged in
      }
    } else if (!["/auth", "/signup"].includes(window.location.pathname)) {
      navigate("/auth"); // Redirect to login if not authenticated
    }
  }, [currentUser, navigate]);

  // Define application routes
//   const element = useRoutes([
//     { path: "/", element: <Dashboard /> },
//     { path: "/auth", element: <Login /> },
//     { path: "/signup", element: <Signup /> },
//     { path: "/profile", element: <Profile /> },
//   ]);

  return (
    
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path='/auth' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
    </Routes>
   
  );
};

export default ProjectRoutes;
