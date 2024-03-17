import home from "../pages/Home";
import challenge from "../pages/Challenges";
import React from "react"
interface RouteConfig {
    path: string;
    icon: string;
    name:string;
    component: React.ComponentType;
    layout:string;
  }
  const StudentRoutes =[
    {
        path: "/home",
        icon: "nc-icon nc-alien-33",
        component: home,
        layout:"student"
      },
      {
        path: "/admin/challenge",
        icon: "nc-icon nc-alien-33",
        component: challenge,
        layout:"student"
      }
  ]
export default StudentRoutes;