import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./connection";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && !isAuthenticated().user.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
