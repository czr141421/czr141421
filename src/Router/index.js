import App from "../App.js";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/404";
import Home from "../Pages/home";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
// import { createHashHistory } from "history";
// const history = createHashHistory();

class RouterConfig extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/page1" component={Page1}>
                        {/* <Redirect to="/home"></Redirect> */}
                    </Route>
                    <Route path="/page2/:aaa" component={Page2}></Route>
                    <Route path="*" component={Page3}></Route>
                </Switch>
            </Router>
        );
    }
}
export default RouterConfig;
