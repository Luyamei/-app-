import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
//路由容器HashRouter:所有组件切换都会发生在HashRouter
//路线切换组件Route
import Login from '../pages/login/Login' //登录页面
import Reg from '../pages/reg/Reg'  //注册页面
import Nav from '../pages/nav/Nav'  //导航页面
import City from '../pages/city/City'  //选择城市页面
export default class MainRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/* path：要匹配的hash值，默认为模糊匹配，以/开头的都会被拦截 */}
                    {/* exact：精准匹配  /  ===  /  才会被拦截*/}
                    {/* component匹配成功后加载的页面 */}
                    <Route path='/' exact component={Nav}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/reg' component={Reg}></Route>
                    <Route path='/city' component={City}></Route>

                    {/* 当用户输入不存在的网址时：1.给个404页面报错  2.跳回首页 */}
                    <Route component={Nav}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
