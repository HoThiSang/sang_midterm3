import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Users from "./components/users/Users";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:id" component={Users} />
            <Route path="/*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
