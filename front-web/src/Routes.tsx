import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Orders/Index";
import Home from "./Home/Index";
import NavBar from "./NavBar/Index";

function Routes (){
    return(
        <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/orders">
                <Orders/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;