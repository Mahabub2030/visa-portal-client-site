import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import AllVisa from "../components/AllVisa";
import AddVisa from "../components/AddVisa";
import MyAddedVisa from "../components/MyAddedVisa";
import MyVisaApplication from "../components/MyVisaApplication";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const routes = createBrowserRouter([
  
  {
    path: "/",
    element: <Home></Home>,
    loader:()=> fetch('http://localhost:3000/visa')
  },
  {
    path: "/AllVisa",
    element: <AllVisa></AllVisa>,
  },
  {
    path: "/AddVisa",
    element: <AddVisa></AddVisa>,   
    // PRIVET ROUTE 
  },
  {
    path: "/MyAddedVisa",
    element: <MyAddedVisa></MyAddedVisa>,
    // PRIVET ROUTE 
  },
  {
    path: "/MyVisaApplication",
    element: <MyVisaApplication></MyVisaApplication>,
    // PRIVET ROUTE 
  },
  {
    path: "/login",
    element: <Login></Login>,
    
  },
  {
    path: "/Register",
    element: <Register></Register>,
    
  },

])

export default routes;