import React, { Component } from 'react'


export default class Views extends Component {
    render() {
        return (
            <div className="view-group">
                <button className="btn bg-grey-salt" style={{ width: 40, fontSize: 18, padding: '3px 3px 4px', marginRight: '-1px', border: '1px solid rgb(170, 170, 170)' }}>
                    <i className="fa fa-eye" />
                </button>
                <select className="selectpicker widthpicker select2-hidden-accessible" name="view" style={{ width: '100%', height: '100%' }} tabIndex={-1} aria-hidden="true">
                    <option value="instructor">ผู้สอน</option>
                    <option value="student" disabled>นักเรียน</option>
                    <option value="room" disabled>ห้องเรียน</option>
                </select>
                <span className="select2 select2-container select2-container--default select2-container--focus" dir="ltr" style={{ width: '100%' }}>
                    <span className="selection">
                        <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-view-zm-container">
                            <span className="select2-selection__rendered" id="select2-view-zm-container" title="ผู้สอน">ผู้สอน</span>
                            <span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span>
                        </span></span>
                    <span className="dropdown-wrapper" aria-hidden="true" /></span>
            </div>
        )
    }
}
