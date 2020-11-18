import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { appRoutes } from "./constants/routes";

function Routes() {
  console.log(appRoutes);

  return (
    <Switch>
      {appRoutes.map(({ path, component }: any) => (
        <Route path={path} component={component} />
      ))}
    </Switch>
  );
}

export default Routes;
