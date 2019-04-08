import React, { Component } from 'react'
import logo from './assets/image/logo.png';
export default class PageHedder extends Component {
    render() {
        return (
            <div className="page-header navbar navbar-fixed-top">
                <div className="page-header-inner">
                    <div className="page-logo">
                        <img src={logo} className="logo-default" width="98%" />
                    </div>
                </div>
                <div className="page-top">
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right" style={{ width: 180, textAlign: 'center' }}>
                            <li className="dropdown dropdown-user" style={{ listStyleType: 'none', padding: 0, width: 190, textAlign: 'center' }}>
                                <a href= "#">เทคโนโลยีราชมงคลพระนคร <br />แฟ้มงาน</a>
                                <i className="fa fa-angle-down" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
