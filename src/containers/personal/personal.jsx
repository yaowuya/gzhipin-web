import React, {Component} from 'react';
import {Result, List, WhiteSpace, Button, Modal} from 'antd-mobile'
import {connect} from "react-redux"
import Cookies from "js-cookie"
import {resetUser} from "../../redux/actions"

const Item = List.Item
const Brief = Item.Brief

class Personal extends Component {
    logout = () => {
        console.log("logout");
        Modal.alert("推出", '确定退出登陆吗?', [
            {text: "取消"},
            {
                text: "确定",
                onPress: () => {
                    // 干掉cookie中userid
                    Cookies.remove('userid')
                    // 干掉redux管理user
                    this.props.resetUser("退出")
                }
            }
        ])
    }

    render() {
        const {username, info, header, company, post, salary} = this.props.user
        return (
            <div className="my-50">
                <Result
                    img={<img src={require(`../../assets/images/headers/${header}.png`)} style={{width: 50}}
                              alt="header"/>}
                    title={username}
                    message={company}
                />

                <List renderHeader={() => '相关信息'}>
                    <Item multipleLine>
                        <Brief>职位: {post}</Brief>
                        <Brief>简介: {info}</Brief>
                        {salary ? <Brief>薪资: {salary}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Button type='warning' onClick={this.logout}>退出登录</Button>
                </List>
            </div>
        );
    }
}

export default connect(
    state => ({user: state.user}),
    {resetUser}
)(Personal)
