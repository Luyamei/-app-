import React, { Component } from 'react'
import { InputItem, Button, Flex, Checkbox, Toast,WhiteSpace,WingBlank } from 'antd-mobile'
import Link from 'react-router-dom/Link'

import './reg.scss'


// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let moneyKeyboardWrapProps;
// if (isIPhone) {
//   moneyKeyboardWrapProps = {
//     onTouchStart: e => e.preventDefault(),
//   };
// }

export default class Reg extends Component {
    state = {
        acc:'',  //用户名
        pwd:'',  //密码
        sum:'',  //验证码
        hasError: false,
    }
 
    render() {
        const { acc,pwd,sum } = this.state;
        return (
            <div className='reg'>
               <WhiteSpace size="xl" />
               <WingBlank size='md'>
                   <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        clear
                        value={acc}
                        onChange={this.accChange}
                    ></InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        clear
                        value={pwd}
                        onChange={this.pwdChange}
                    ></InputItem>
                    <InputItem
                        type='money'
                        placeholder="请输入验证码"
                        clear
                        value={sum}
                        // moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >请输入验证码</InputItem>
               </WingBlank>
                    
                    <Flex style={{ padding: '15px' }}>
                        <Checkbox className="my-radio" onChange={e => console.log('checkbox', e)}><span>我已同意</span><span>《用户服务协议》及《隐私权政策》</span></Checkbox>
                    </Flex>
                    <Button className='acc' onClick={this.regClick}>注册</Button>
                    <p><Link className='color' to='/login'>已有帐号</Link></p>
              
            </div>
        )
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits');
        }
    }
    //手机正则验证
    accChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            // this.setState({
            //     // hasError: true,
                
            // });
            console.log('手机号不对')
        } else {
            // this.setState({
            //     hasError: false,
            // });
            console.log('手机号对')
        }
        this.setState({
            acc:value
        });
    }

    //密码验证
    pwdChange=(val)=>{
        this.setState({pwd:val})
    }


    //点击注册
    regClick=()=>{
        console.log(111)
    }
}
