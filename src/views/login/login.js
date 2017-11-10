/**
 * Created by Administrator on 2017/11/9.
 */
import React, {Component} from "react";
// import '../../../static/login.scss'
import img from '../../assets/images/logo.png'
function goLogin() {
    console.log('登录')
}

export default class Login extends Component {

    render() {
        const styles = require('./login.scss')
        return (
            <div className={styles['login-wrap']}>
                <section className={styles['go-register']}>
                    这是登录页
                </section>
                <h1>
                    <img className={styles.logo} src={img}/>
                </h1>
            </div>
        )
    }
}