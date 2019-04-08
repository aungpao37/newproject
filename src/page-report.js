import React, { Component } from 'react'
import Logo from './assets/image/PrintPreview.svg'

export default class Pagereport extends Component {
    render() {
        return (
            <div className="management">
                <div className="page-bar">
                    <ul className="page-breadcrumb">
                        <li>
                            <i className="fa fa-cogs" />
                            <span>รายงาน</span>
                            <i className="fa fa-angle-right" />
                        </li>
                        <li>
                            <span>พิมรายงาน</span>
                        </li>
                    </ul>
                </div>
                <div className="portlet light portlet-fit">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject font-red sbold uppercase">พิมพ์รายงาน</span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="table-toolbar">
                            <div className="row">
                                <div className="col-xs-5 preview">
                                    <div className="header-preview" style={{ textAlign: 'center' }}>
                                        <p>เทคโนโลยีราชมงคลพระนคร</p>
                                        <p>ตารางสอน นางสาวสมศรี รักสอน แฟ้มงาน</p>
                                    </div>
                                    <div className="table-preview">
                                        <img src={Logo} style={{ marginLeft: 15 }} />
                                    </div>
                                </div>
                                <div className="col-xs-6 bg-default bg-font-default" style={{ margin: '0px 30px', padding: 30, marginTop: 100 }}>
                                    <div className="form-input">
                                        <div className="form-group">
                                            <label className="control-label col-md-4">รูปแบบไฟล์</label>
                                            <div className="col-md-8" style={{ marginTop: 7 }}>
                                                <input type="radio" defaultValue="pdf" /> "Excel"
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-4">มุมมองรายงาน</label>
                                            <div className="col-md-8" style={{ marginTop: 7 }}>
                                                <select className="selectpicker widthpicker select2-hidden-accessible" style={{ width: '100%', height: '100%' }} tabIndex={-1} aria-hidden="true">
                                                    <option value="#">ตารางสอน</option>
                                                    <option value="#">ตารางเรียน</option>
                                                    <option value="#">ตารางการใช้ห้อง</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-4">เลือกข้อมูล</label>
                                            <div className="col-md-8" style={{ marginTop: 7 }}>
                                                <select className="selectpicker widthpicker select2-hidden-accessible" style={{ width: '100%', height: '100%' }} tabIndex={-1} aria-hidden="true">
                                                    <option value="#">เลือกทั้งหมด</option>
                                                    <option value="#">รายการเดียว</option>
                                                    <option value="#">รายการกลุ่ม</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-md-4">ขนาดของกระดาษ</label>
                                            <div className="col-md-8" style={{ marginTop: 7 }}>
                                                <select className="selectpicker widthpicker select2-hidden-accessible" style={{ width: '100%', height: '100%' }} tabIndex={-1} aria-hidden="true">
                                                    <option value="#">A4</option>
                                                    <option value="#">A3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <p style={{ textAlign: 'center' }}>
                                            <button className="btn blue" style={{ marginRight: 15, height: 34, width: 130 }}>พิมพ์รายงาน</button><button className="btn green" style={{ marginRight: 15, height: 34, width: 130 }}>กำหนดค่ารายงาน</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
