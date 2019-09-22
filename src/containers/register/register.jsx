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
import {register} from '../../redux/actions'

const Item = List.Item

class Register extends Component {
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

    toLogin = () => {
        this.props.history.replace("/login")
    }

    register = () => {
        this.props.register(this.state)
    }

    render() {
        const {type} = this.state
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
                        <InputItem
                            className="mt-10"
                            type='password'
                            placeholder='输入确认密码'
                            onChange={val => this.handleChange('password2', val)}
                        >
                            确认密码:
                        </InputItem>
                        <Item className="mt-10">
                            <span className="mr-30">用户类型:</span>
                            <Radio className="ml-10" checked={this.state.type === 'dashen'}
                                   onClick={() => {
                                       this.handleChange('type', 'dashen')
                                   }}>大神</Radio>
                            <Radio className="ml-30" checked={this.state.type === 'laoban'}
                                   onClick={() => {
                                       this.handleChange('type', 'laoban')
                                   }}>老板</Radio>
                        </Item>
                        <Button className="mt-10" type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <Button className="mt-10" onClick={this.toLogin}>已经有账号</Button>
                    </List>
                    {msg ? <p className='text-center text-red fs-18'>{msg}</p> : null}
                </WingBlank>
            </div>
        );
    }
}

//和redux交互
export default connect(
    state => state.user,
    {register}
)(Register)
