import React, { Component } from 'react'
import SidebarNav from './SidebarNav';
import './style.css';
import Pagestudent from './page-student';
import { BrowserRouter, Route } from 'react-router-dom';
import Pageroom from './page-room';
import Pagesubject from './page-subject';
import Pageteacher from './page-teacher';
import Pageloginteacher from './page-login-teacher';
import Pagelogingenaral from './page-login-genaral';
import Pageloginadmin from './page-login-admin';
import Pagereport from './page-report';
import home from './home';


export default class Pagecontainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="page-container">
                    <div className="page-sidebar-wrapper">
                    <SidebarNav></SidebarNav>
                    </div>
                    <div className="page-content-wrapper">
                        <div className="page-content" style={{ height: 'calc(100vh - 150px)', overflowY: 'scroll', paddingBottom: 80, minHeight: 391 }}>
                            <Route path="/"  />
                            <Route path="/home" component={home} />
                            <Route path="/teacher" component={Pageteacher} />
                            <Route path="/room"  component={Pageroom}/>
                            <Route path="/student"  component={Pagestudent} />
                            <Route path="/subject" component={Pagesubject} />
                            <Route path="/management/teacher" component={Pageloginteacher} />
                            <Route path="/management/general" component={Pagelogingenaral} />
                            <Route path="/management/admin" component={Pageloginadmin} />
                            <Route path="/report" component={Pagereport} />
                            
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
