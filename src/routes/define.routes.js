import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Categories from "../pages/Categories";
import Courses from "../pages/Courses";
import Users from "../pages/Users";

export const routes = [
  { path: "/", component: () => <Redirect to="/courses" />, auth: false },
  { path: "/login", component: () => <Login />, auth: false },
  { path: "/courses", component: () => <Courses />, auth: true },
  { path: "/users", component: () => <Users />, auth: true },
  { path: "/categories", component: () => <Categories />, auth: true },
];
