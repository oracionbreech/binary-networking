import Dashboard from "../../Dashboard/Dashboard";
import Home from "../../Home/Home";
import Networks from "../../Networks/Networks";
import Statistics from "../../Statistics/Statistics";
import Transactions from "../../Transactions/Transactions";

export const appRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/networks",
    name: "Networks",
    component: Networks,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
  },
];
