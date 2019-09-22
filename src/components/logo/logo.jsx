import React, {Component} from 'react';
import logo from '../../assets/images/logo/logo.png'
import './logo.scss'

class Logo extends Component {
    render() {
        return (
            <div className="logo-container text-center m-10">
                <img src={logo} alt="logo" className="logo-img"/>
            </div>
        );
    }
}

export default Logo;
