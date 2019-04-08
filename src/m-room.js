import React, { Component } from 'react'


export default class Roomm extends Component {
  render() {
    return (
        <div className="modal-body">
        <div className="form-group">
            <label>ลำดับ</label>
            <input type="text" id="subject" placeholder="ลำดับ" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
            <label>ชื่อห้อง</label>
            <input type="text" id="subject1" placeholder="ชื่อห้อง" className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
            <label>อาคาร</label>
            <input type="text" id="subject2" placeholder="อาคาร " className=" form-control editor edit-text" />
        </div>
        <div className="form-group">
          <label>หมายเหตุ</label>
          <input type="text" id="subject2" placeholder="หมายเหตุ" className=" form-control editor edit-text" />
        </div>
    </div>
    )
  }
}
