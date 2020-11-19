import Dashboard from "../../Dashboard/Dashboard";
import Home from "../../Home/Home";
import Networks from "../../Networks/Networks";
import Profile from "../../Profile/Profile";
import Settings from "../../Settings/Settings";
import Statistics from "../../Statistics/Statistics";
import Tickets from "../../Tickets/Tickets";
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
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];
