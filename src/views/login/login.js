/**
 * Created by Administrator on 2017/11/9.
 */
import React, {Component} from 'react';
// import '../../../static/login.scss'
import img from '../../assets/images/logo.png';
import {Link} from 'react-router';
function goLogin() {
    console.log('登录');
}

export default class Login extends Component {
    render() {
        const styles = require('./login.scss');
        return (
            <div className={styles['login-wrap']}>
                <section className={styles['go-register']}>
                    <span className="fl"><Link to="/index">返回</Link></span>
                    <span className="fr">注册</span>
                </section>
                <h1 className={styles['logo-box']}>
                    <img className={styles.logo} src={img}/>
                </h1>
            </div>
        );
    }
}