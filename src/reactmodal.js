import React, { Component } from 'react'
import './tryjs'
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import Teacherm from './m-teacher';
import Generalm from './m-general';
import Adminm from './m-admin';
import Subjectm from './m-subject';
import Studentm from './m-student';
import Roomm from './m-room';





export default class Reactmodal extends Component {

    
    addSubject2 = () => {
        alert("TEST");
        var name = document.getElementById("subject").value;
        var subject1 = document.getElementById("subject1").value;
        var subject2 = document.getElementById("subject2").value;
        var subject3 = document.getElementById("subject3").value;
        var subject4 = document.getElementById("subject4").value;
        console.log(name);
        console.log("sub = "+subject1);

        axios.post('http://127.0.0.1:5000/subject', {
            name: name,
            subject1: subject1
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        if(!this.props.show) {
            return null;
          }
        return (
            <div className="ReactModalPortal">
                <div data-reactroot style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.75)' ,zIndex:10000}} className="ReactModal__Overlay ReactModal__Overlay--after-open">
                    <div className="ReactModal__Content ReactModal__Content--after-open react-bs-insert-modal modal-dialog">
                        <div className="modal-content react-bs-table-insert-modal">
                            <div className="modal-header">
                                <span>
                                    <button onClick={this.props.onClose} type="button" className="close">
                                        <span aria-hidden="true">×</span>
                                        <span className="sr-only">Close</span>
                                    </button>
                                    <h4 className="modal-title">เพิ่มข้อมูล</h4>
                                </span>
                            </div>
                            <BrowserRouter>
                                <Route path="/room"  component={Roomm}/>
                                <Route path="/student" component={Studentm} />
                                <Route path="/subject" component={Subjectm} />
                                <Route path="/management/teacher" component={Teacherm} />
                                <Route path="/management/general" component={Generalm} />
                                <Route path="/management/admin" component={Adminm} />
                            </BrowserRouter>
                            <div className="modal-footer">
                                <button  onClick={this.props.onClose} className="btn btn-default" style={{ float: 'right' }}>ยกเลิก</button>
                                <button className="btn green" style={{ float: 'left' }} onClick={this.addSubject2}>บันทึกและเพิ่มใหม่</button>
                                <button className="btn btn-primary my-save-btn" style={{ float: 'left' }}>บันทึก</button>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
