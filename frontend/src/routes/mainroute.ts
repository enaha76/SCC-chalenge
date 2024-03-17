import React from "react";
import AdminRoutes from "./adminroute";
import StudentRoutes from "./studentroute";
import Login from '../pages/Login';
import Register from '../pages/Register';

interface RouteConfig {
    path: string;
    name?: string; // Making name optional as it's not used in all routes
    component: React.ComponentType<any>;
    layout:string ;
}

const token = localStorage.getItem("authToken");
const isAuthenticated = token !== null;
const currentUserURL = window.location.pathname;
const role = localStorage.getItem("role");
const isAdmin = role === "admin";
const isStudent = role === "etudiant";
let mainRoutes: RouteConfig[] = [];

console.log("Current URL:", currentUserURL);

if (currentUserURL.includes("/Admin") && isAuthenticated && isAdmin) {
  mainRoutes = AdminRoutes as RouteConfig[];
} else if (currentUserURL.includes("/etudiants") && isAuthenticated && isStudent) {
  mainRoutes = StudentRoutes as RouteConfig[];
} else if (currentUserURL.includes("register")) {
  mainRoutes = [
    {
        path: "/register",
        name:"register",
        component: Register,
        layout:"ad"
    },
  ];
} else if (currentUserURL.includes("login")) {
  mainRoutes = [
    {
        path: "/login",
        name:"login",
        component: Login,
        layout:"student"
    },
  ];
} else {
  window.location.href = "/login";
}

export default mainRoutes;
