import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SidebarNav extends Component {
    render() {
        return (

            <div className="page-sidebar navbar-collapse collapse">
                <ul className="page-sidebar-menu page-header-fixed page-sidebar-menu-hover-submenu">
                    <li className="nav-item start active open">
                        <Link to="/home" className="nav-link nav-toggle">
                            <i className="fas fa-table" />
                            <span className="title">จัดตารางสอน</span>
                            <span className="selected" />
                            <span className="arrow"></span>
                        </Link>
                    </li>
                    <li className="nav-item start active open">
                        <a href="#" className="nav-link nav-toggle">
                            <i className="fas fa-database" />
                            <div className="title">ข้อมูล</div>
                            <div className="selected" />
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <Link to="/room" className="nav-link">
                                    <span className="title">ห้องเรียน</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/student" className="nav-link">
                                    <span className="title">นักเรียน</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/subject" className="nav-link">
                                    <span className="title">วิชา</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item start active open">
                        <a href="#" className="nav-link nav-toggle">
                            <i className="fas fa-user-plus" />
                            <div className="title">จัดการผู้ใช้งาน</div>
                            <div className="selected" />
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <Link to="/management/teacher" className="nav-link">
                                    <span className="title">ผู้สอน</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/management/general" className="nav-link">
                                    <span className="title">ผู้ใช้ทั่วไป</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/management/admin" className="nav-link">
                                    <span className="title">ผู้ดูแลระบบ</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item start active open">
                        <Link to="/home/report" className="nav-link nav-toggle">
                            <i className="fas fa-print" />
                            <div className="title">รายงาน</div>
                            <div className="selected" />
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
