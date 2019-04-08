import React, { Component } from 'react'
export default class Selectgroup extends Component {
    render() {
        return (
            <div className="select-group" style={{ marginBottom: '-10px', width: '100%' }}>
                <div className="student" style={{ width: '15%', marginRight: 20, height: 34 }}>
                    <select name="student_id" style={{ width: '100%' }} tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true" />
                    <div className="select2 select2-container select2-container--default select2-container--below select2-container--focus" dir="ltr" style={{ width: '100%' }}>
                        <div className="selection">
                            <div className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-student_id-40-container">
                                <div className="select2-selection__rendered" id="select2-student_id-40-container">
                                    <div className="select2-selection__placeholder">นักเรียน</div>
                                </div>
                                <div className="select2-selection__arrow" role="presentation">
                                    <b role="presentation" />
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-wrapper" aria-hidden="true" />
                    </div>
                </div>
                <div className="room" style={{ width: '15%', marginRight: 20, height: 34 }}>
                    <select name="room_id" style={{ width: '100%' }} tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true" />
                    <div className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '100%' }}>
                        <div className="selection">
                            <div className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-room_id-5q-container">
                                <div className="select2-selection__rendered" id="select2-room_id-5q-container">
                                    <div className="select2-selection__placeholder">ห้องเรียน</div>
                                </div>
                                <div className="select2-selection__arrow" role="presentation">
                                    <b role="presentation" />
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-wrapper" aria-hidden="true" />
                    </div>
                </div>
                <div className="subject" style={{ width: '15%', marginRight: 20, height: 34 }}>
                    <select name="subjects_id" style={{ width: '100%' }} tabIndex={-1} className="select2-hidden-accessible" aria-hidden="true" />
                    <div className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '100%' }}>
                        <div className="selection">
                            <div className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-subjects_id-2c-container">
                                <div className="select2-selection__rendered" id="select2-subjects_id-2c-container">
                                    <div className="select2-selection__placeholder">วิชา</div>
                                </div>
                                <div className="select2-selection__arrow" role="presentation">
                                    <b role="presentation" />
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-wrapper" aria-hidden="true" />
                    </div>
                </div>
                <input type="number" step={1} min={0} name="period" defaultValue className="period-input" placeholder="ระยะเวลา" style={{ width: '9%' }} />
                <button className="btn btn-generatecard green" style={{ width: '9%' }}>เพิ่ม</button>
                <div className="color-picker" style={{ width: '8%' }}>
                    <div className="color-picker-preview" style={{ background: 'rgb(44, 204, 228)' }}>
                    </div><i className="fa fa-angle-down color-picker-fa" />
                </div>
            </div>
        )
    }
}
