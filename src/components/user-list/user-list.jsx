/*
显示指定用户列表的UI组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {WingBlank, WhiteSpace, Card} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'

const Header = Card.Header
const Body = Card.Body

class UserList extends Component {
    render() {
        const {userList} = this.props
        return (
            <WingBlank className="my-50">
                <QueueAnim type="scale">
                    {
                        userList.map(user => (
                            <div key={user._id}>
                                <WhiteSpace/>
                                <Card>
                                    <Header
                                        thumb={require(`../../assets/images/headers/${user.header}.png`)}
                                        extra={user.username}
                                    />
                                    <Body>
                                        <div>职位: {user.post}</div>
                                        {user.company ? <div>公司: {user.company}</div> : null}
                                        {user.salary ? <div>月薪: {user.salary}</div> : null}
                                        <div>描述: {user.info}</div>
                                    </Body>
                                </Card>
                            </div>
                        ))
                    }
                </QueueAnim>
            </WingBlank>
        );
    }
}

UserList.propTypes = {
    userList: PropTypes.array.isRequired
};

export default withRouter(UserList)
