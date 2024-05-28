import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Search from "../users/Search";
import User from "../users/User";
import Repos from "../repos/Repos";

const Home = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user/:id" component={User} />
        <Route exact path="/user/:name" component={Repos} />
        <Route path="/*" component={NotFound}></Route>
      </Switch>
    </div>
  );
};
export default Home;
