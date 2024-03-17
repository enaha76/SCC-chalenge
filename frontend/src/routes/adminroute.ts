import Dashboard from "../pages/Dashboard";
import challenge from "../pages/Challenges";
import React from "react"
interface RouteConfig {
    path: string;
    icon: string;
    name:string;
    component: React.ComponentType;
    layout:string
  }
  const AdminRoutes =[
    {
        path: "/admin",
        icon: "nc-icon nc-alien-33",
        component: Dashboard,
        layout:"admin"
      },
      {
        path: "/admin/challenge",
        icon: "nc-icon nc-alien-33",
        component: challenge,
        layout:"challenge"
      }
  ]
export default AdminRoutes;