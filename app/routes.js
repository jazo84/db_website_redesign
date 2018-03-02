import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/home";
import AboutUs from "./components/pages/about-us";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
      <Route path="/aboutus" component={AboutUs} />
    </Switch>
);
