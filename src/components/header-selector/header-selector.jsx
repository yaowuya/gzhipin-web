import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, Grid} from 'antd-mobile'

class HeaderSelector extends Component {

    state = {
        icon: null
    }

    constructor(props) {
        super(props);
        this.headerList = []
        for (let i = 0; i < 20; i++) {
            this.headerList.push({
                text: '头像' + (i + 1),
                icon: require(`../../assets/images/headers/头像${i + 1}.png`) // 不能使用import
            })
        }
    }

    handleClick = ({text, icon}) => {
        // 更新当前组件状态
        this.setState({icon})
        // 调用函数更新父组件状态
        this.props.setHeader(text)
    }

    render() {
        const {icon} = this.state
        const listHeader = !icon ? '请选择头像' : (
            <div>
                已选择头像:<img src={icon}/>
            </div>
        )
        return (
            <List renderHeader={() => listHeader}>
                <Grid data={this.headerList}
                      columnNum={5}
                      onClick={this.handleClick}
                />
            </List>
        );
    }
}

HeaderSelector.propTypes = {
    setHeader: PropTypes.func.isRequired
};

export default HeaderSelector;
