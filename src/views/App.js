import React, {Component} from "react";
import {Link} from "react-router";
import store from "../store";
import {Index} from '../views/index'
const user = false
export default class App extends Component {
    render() {

        return (
            <div data-auth={user}>
                {user &&
                <Index></Index>}
                {/*<ul>
                 <li><Link to="/welcome" activeClassName = "active">Welcome</Link></li>
                 <li><Link to="/counter" activeClassName = "active">Counter</Link></li>
                 <li><Link to="/calculator" activeClassName = "active">Calculator</Link></li>
                 <li><Link to="/searchBar/f11" activeClassName = "active">SearchBar</Link></li>
                 </ul>*/}

                { !user && this.props.children }
            </div>
        )
    }
}

