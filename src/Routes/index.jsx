import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Promotions from "../Pages/Promotions";
import Sports from "../Pages/Sports";
// import Affiliate from "../Components/Affiliate/index";
import ContactUs from "../Pages/ContactUs";
import ErrorPage from "../Pages/Error/";
import Terms from "../Pages/Terms/Terms";
import Privacy from "../Pages/Privacy/Index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/promotions">
        <Promotions />
      </Route>
      <Route path="/sports">
        <Sports />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
      <Route path="/error404">
        <ErrorPage />
      </Route>
      <Route path="/terms-conditions">
        <Terms />
      </Route>
      <Route path="/Privacy">
        <Privacy />
      </Route>
    </Switch>
  );
};

export default Routes;
