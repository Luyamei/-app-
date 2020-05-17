import React, { Component } from 'react'
import { InputItem, Button,Flex,WingBlank, WhiteSpace } from 'antd-mobile'
// import {createForm} from 'rc-form'
import Link from 'react-router-dom/Link'

import {login} from '../../api/apis'
import './login.scss'



export default class Login extends Component {
    state={
        acc:'',  //用户名
        pwd:'',  //密码
        display:'none'  //错误提示显示或者隐藏
    }
    render() {
        const {acc,pwd,display} =this.state
        return (
            <div className='content'>
                <Flex justify='center'>
                    <img src='http://b.hiphotos.baidu.com/baike/w%3D268/sign=b3d11473b27eca8012053ee1a9229712/8435e5dde71190ef7706208fcc1b9d16fcfa60e4.jpg' />
                </Flex>
                <WingBlank size="md">
                    <InputItem placeholder="请输入手机号" clear value={acc} onChange={this.accChange}>
                        <div style={{ backgroundImage: 'url('+require('../../assets/imgs/user.png')+')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        clear
                        value={pwd}
                        onChange={this.pwdChange}
                    >
                         <div style={{ backgroundImage: 'url('+require('../../assets/imgs/pwd.png')+')', backgroundSize: 'cover', height: '22px', width: '22px' }}/>
                    </InputItem>
                    

                    <p style={{display:display}} className='error'>手机号或者密码不对，请重新输入！</p>
                </WingBlank>
                <WhiteSpace size="sm" />
                    <Button className='acc' onClick={this.btnClick}>登陆</Button>

                    <WhiteSpace size="lg" />
                    <Flex justify='between'>
                        <Link className='left' to='/reg'>手机快速注册</Link>
                        <Link className='right' to='/reg'>忘记密码？</Link>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                    <Flex justify='center' className='text'>注册/登录即代表同意《房产用户协议》</Flex>
                
            </div>
            
        )
    }
    accChange=(val)=>{
        // console.log(val)
        this.setState({acc:val})
    }
    pwdChange=(val)=>{
        this.setState({pwd:val})
    }
    btnClick=()=>{
        //防抖节流
        if(this.isClick) return 
        this.isClick=true  //设置flag，判断是否为点击状态
        setTimeout(()=>{
            this.isClick=false
        },2000)
        console.log('请求发送中')
        login(this.state.acc,this.state.pwd).then((res)=>{
            if(res.data=='ok'){
                //成功
                window.location.href('/#/')
            }else{
                //失败
                this.setState({display:'block'})
            }
        })
          
    }
}




