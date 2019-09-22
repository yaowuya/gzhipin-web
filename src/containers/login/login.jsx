import React, {Component} from 'react';
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'


import Logo from '../../components/logo/logo'

const Item = List.Item

class Login extends Component {
    state = {
        username: '',
        password: '',
        password2: '',
        type: 'dashen'
    }

    // 处理输入框/单选框变化, 收集数据到state
    handleChange = (name, value) => {
        this.setState({[name]: value})
    }

    // 跳转到注册路由
    toRegister = () => {
        this.props.history.replace('/register')
    }

    login = () => {
        console.log(this.state)
    }

    render() {
        const {type} = this.state
        return (
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo></Logo>
                <WingBlank size="sm">
                    <List>
                        <InputItem
                            placeholder="输入用户名"
                            onChange={val => {
                                this.handleChange('username', val)
                            }}>
                            用户名:
                        </InputItem>
                        <InputItem
                            className="mt-10"
                            type='password'
                            placeholder='输入密码'
                            onChange={val => this.handleChange('password', val)}
                        >
                            密&nbsp;&nbsp;&nbsp;码:
                        </InputItem>
                        <Button className="mt-10" type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;陆</Button>
                        <Button className="mt-10" onClick={this.toRegister}>还没有账号</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

export default Login;
