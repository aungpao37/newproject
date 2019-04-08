import React, { Component } from 'react'


export default class Adminm extends Component {
  render() {
    return (
      <div className="modal-body">
        <div className="form-group">
          <label>ลำดับ</label>
          <input type="text" id="subject" placeholder="ลำดับ" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
          <label>ชื่อ</label>
          <input type="text" id="subject1" placeholder="ชื่อ" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
          <label>นามสกุล</label>
          <input type="text" id="subject1" placeholder="นามสกุล" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
          <label>ชื่อผู้ใช้งาน</label>
          <input type="text" id="subject2" placeholder="ชื่อผู้ใช้งาน" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
          <label>หมายเหตุ</label>
          <input type="text" id="subject2" placeholder="หมายเหตุ" className=" form-control editor edit-text" />
        </div>
      </div>
    )
  }
}
