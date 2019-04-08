import React, { Component } from 'react'


export default class Subjectm extends Component {
  render() {
    return (
        <div className="modal-body">
        <div className="form-group">
            <label>ลำดับ</label>
            <input type="text" id="subject" placeholder="ลำดับ" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
            <label>ชื่อวิชา</label>
            <input type="text" id="subject1" placeholder="ชื่อวิชา" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
            <label>หน่วยกิต</label>
            <input type="text" id="subject2" placeholder="หน่วยกิต" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
          <label>หมายเหตุ</label>
          <input type="text" id="subject2" placeholder="หมายเหตุ" className=" form-control editor edit-text" />
        </div>
    </div>
    )
  }
}
