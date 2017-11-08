import React,{ Component } from "react";
import { Link } from "react-router";

export default class App extends Component{
	render(){

		return(
			<div>
				<h1 style={{width: '2rem'}}>App</h1>
				<ul>
					<li><Link to="/welcome" activeClassName = "active">Welcome</Link></li>
					<li><Link to="/counter" activeClassName = "active">Counter</Link></li>
					<li><Link to="/calculator" activeClassName = "active">Calculator</Link></li>
					<li><Link to="/searchBar/f11" activeClassName = "active">SearchBar</Link></li>
				</ul>
				{ this.props.children }
			</div>
		)
	}
}

