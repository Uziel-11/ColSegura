import React from "react";
import {BrowserRouter as Router, Switch,Route,Redirect} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

class App extends React.Component{

    render() {

        return(
            <div>
                <Router>
                    <Switch>

                        <Route exact path='/' render={()=>(<Redirect to="/Login"/>)}/>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path="/Home" component={Home}/>
                    </Switch>
                </Router>
            </div>

        )
    }
}

export default App;