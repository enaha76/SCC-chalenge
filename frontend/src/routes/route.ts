import login from "../pages/Login";
import register from "../pages/Register";
import React from "react"
interface RouteConfig {
    path: string;
    icon: string;
    name:string;
    component: React.ComponentType;
    layout:string
  }
  const route =[
    {
        path: "/login",
        icon: "nc-icon nc-alien-33",
        component: login,
        layout:"admin"
      },
      {
        path: "/register",
        icon: "nc-icon nc-alien-33",
        component: register,
        layout:"register"
      }
  ]
export default route;