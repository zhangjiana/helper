/**
 * Created by Administrator on 2017/11/9.
 */
import React, {Component} from 'react';
import img from '../../assets/images/logo.png';
import {browserHistory, Link} from 'react-router';
function goBack() {
    console.log('返回上一页');
    browserHistory.goBack();
}
function goLogin() {
    console.log('去登录');
}
export default class Login extends Component {
    render() {
        const styles = require('./login.scss');
        return (
            <div className={styles['login-wrap']}>
                <section className={styles['go-register']}>
                    <span className="fl" onClick={goBack}>返回</span>
                    <span className="fr">注册</span>
                </section>
                <h1 className={styles['logo-box']}>
                    <img className={styles.logo} src={img}/>
                </h1>
                <form onSubmit={goLogin}>
                    <p className={styles.input}>
                        <i className="iconfont icon-mobile"></i>
                        <input type="tel" placeholder="手机号"/>
                        <i className="fr iconfont icon-close"></i>
                    </p>
                    <p className={styles.input}>
                        <i className="iconfont icon-lock"></i>
                        <input type="text" placeholder="登录密码"/>
                        <i className="fr iconfont"></i>
                    </p>
                    <p className={styles['forget-password']}>
                        <a>忘记密码</a>
                    </p>
                    <button type="submit" className={styles.btn} >登录</button>
                </form>
            </div>
        );
    }
}