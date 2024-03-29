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

import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../components/logo/logo'

import {login} from "../../redux/actions"

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
        this.props.login(this.state)
    }

    render() {
        const {redirectTo, msg} = this.props
        if (redirectTo) {
            return <Redirect to={redirectTo}/>
        }
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
                    {msg ? <p className='text-center text-red fs-18'>{msg}</p> : null}
                </WingBlank>
            </div>
        );
    }
}

export default connect(
    state => state.user,
    {login}
)(Login)
