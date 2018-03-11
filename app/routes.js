import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/home";
import AboutUs from "./components/pages/about-us";
import Media from "./components/pages/media";
import Services from "./components/pages/services";
import ContactUs from "./components/pages/contact-us";
import Cases from "./components/pages/cases-alerts";
import Blog from "./components/pages/blog";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/inthenews" component={Media} />
      <Route path="/services" component={Services} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/cases-alerts" component={Cases} />
      <Route path="/blog" component={Blog} />
    </Switch>
);
