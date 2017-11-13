/**
 * Created by Administrator on 2017/11/9.
 */
import React, {Component} from "react";
import {Link} from "react-router";
import { browserHistory } from 'react-router'
function toLogin() {
    browserHistory.push('/login')
}
// 组件内跳转
// this.context.router.push(path)

// 组件外跳转
// import { browserHistory } from 'react-router'
// browserHistory.push('/login')

export default class Index extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/welcome">welcome</Link></li>
                    <li><Link to="/counter">counter</Link></li>
                    <li><Link to="/calculator">calculator</Link></li>
                    <li><Link to="/searchBar/f11">searchBar</Link></li>
                    <li onClick={toLogin}>登录</li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}