/**
 * Created by Administrator on 2017/11/9.
 */
import React, {Component} from "react";
import {Link} from "react-router";

export default class Index extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/welcome">welcome</Link></li>
                    <li><Link to="/counter">counter</Link></li>
                    <li><Link to="/calculator">calculator</Link></li>
                    <li><Link to="/searchBar/f11">searchBar</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}