import React, { Component } from 'react'


export default class Studentm extends Component {
  render() {
    return (
        <div className="modal-body">
        <div className="form-group">
            <label>ลำดับ</label>
            <input type="text" id="subject" placeholder="ลำดับ" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
            <label>ชื่อกลุ่ม</label>
            <input type="text" id="subject1" placeholder="ชื่อกลุ่ม" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
            <label>รหัสกลุ่ม</label>
            <input type="text" id="subject2" placeholder="รหัสกลุ่ม" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
          <label>หมายเหตุ</label>
          <input type="text" id="subject2" placeholder="หมายเหตุ" className=" form-control editor edit-text" />
        </div>
    </div>
    )
  }
}
