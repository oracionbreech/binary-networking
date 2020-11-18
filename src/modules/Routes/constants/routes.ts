import Dashboard from "../../Dashboard/Dashboard";
import Home from "../../Home/Home";

export const appRoutes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Home,
  },
];
