import React, { Component } from 'react'
import Reactmodal from './reactmodal';


export default class Pagesubject extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="management">
                <div className="page-bar">
                    <ul className="page-breadcrumb">
                        <li>
                            <i className="fas fa-database" />
                            <span>ข้อมูล</span>
                            <i className="fa fa-angle-right" />
                        </li>
                        <li>
                            <span>วิชา</span>
                        </li>
                    </ul>
                </div>
                <div className="portlet light portlet-fit">
                    <div className="portlet-title">
                        <div className="caption">
                            <span className="caption-subject font-red sbold uppercase">รายชื่อวิชา</span>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="table-toolbar">
                            <div className="react-bs-table-container">
                                <div className="react-bs-table-tool-bar">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">
                                            <div className="btn-group btn-group-md my-custom-class" role="group">
                                                <button onClick={this.toggleModal} className="btn green my-add-btn" style={{ marginRight: 10 }}>
                                                    <i className="fa fa-plus" />เพิ่ม</button>
                                                <Reactmodal show={this.state.isOpen} onClose={this.toggleModal}>></Reactmodal>
                                            </div>
                                            <div className="btn-group btn-group-md my-custom-class" role="group">
                                                <button className="btn red my-delete-btn" style={{ marginRight: 10 }}>
                                                    <i className="fa fa-trash" />ลบ</button>
                                            </div>
                                            <div className="btn-group btn-group-md my-custom-class" role="group">
                                                <button className="btn btn-warning" style={{ marginRight: 10 }}>
                                                    <i className="fas fa-edit" />แก้ไข</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="react-bs-table" style={{ height: '100%' }}>
                                        <div className="react-bs-container-header table-header-wrapper">
                                            <table className="table table-hover table-bordered">
                                                <colgroup>
                                                    <col style={{ width: 30, minWidth: 30 }} />
                                                    <col className="" style={{ display: 'none' }} />
                                                    <col className="" />
                                                    <col className="" />
                                                    <col className=""/>
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th rowSpan={1} data-is-only-head="false" style={{ textAlign: 'center' }}>
                                                            <input type="checkbox" className="react-bs-select-all" defaultValue="on" />
                                                        </th>
                                                        <th className="sort-column" data-is-only-head="false" title="Id" data-field="id" style={{ textAlign: 'left', display: 'none' }}>
                                                            {/* react-text: 235 */}Id{/* /react-text */}<span className="order">
                                                                <span className="dropdown">
                                                                    <span className="caret" style={{ margin: '10px 0px 10px 5px', color: 'rgb(204, 204, 204)' }} />
                                                                </span><span className="dropup">
                                                                    <span className="caret" style={{ margin: '10px 0px', color: 'rgb(204, 204, 204)' }} />
                                                                </span></span><div />
                                                        </th>
                                                        <th className="sort-column" data-is-only-head="false" title="ลำดับ" data-field="position" style={{ textAlign: 'left' }}>
                                                            {/* react-text: 243 */}ลำดับ{/* /react-text */}<span className="order dropup">
                                                                <span className="caret" style={{ margin: '10px 5px' }} />
                                                            </span>
                                                            <div />
                                                        </th>
                                                        <th className="sort-column" data-is-only-head="false" title="ชื่อวิชา" data-field="title" style={{ textAlign: 'left' }}>
                                                            {/* react-text: 248 */}ชื่อวิชา{/* /react-text */}<span className="order">
                                                                <span className="dropdown">
                                                                    <span className="caret" style={{ margin: '10px 0px 10px 5px', color: 'rgb(204, 204, 204)' }} /></span>
                                                                <span className="dropup"><span className="caret" style={{ margin: '10px 0px', color: 'rgb(204, 204, 204)' }} />
                                                                </span>
                                                            </span>
                                                            <div />
                                                        </th>
                                                        <th className="sort-column" data-is-only-head="false" title="จำนวนหน่วยกิจ" data-field="title" style={{ textAlign: 'left' }}>
                                                            {/* react-text: 248 */}จำนวนหน่วยกิต{/* /react-text */}<span className="order">
                                                                <span className="dropdown">
                                                                    <span className="caret" style={{ margin: '10px 0px 10px 5px', color: 'rgb(204, 204, 204)' }} /></span>
                                                                <span className="dropup"><span className="caret" style={{ margin: '10px 0px', color: 'rgb(204, 204, 204)' }} />
                                                                </span>
                                                            </span>
                                                            <div />
                                                        </th>
                                                        <th className="sort-column" data-is-only-head="false" title="หมายเหตุ" data-field="title" style={{ textAlign: 'left' }}>
                                                            {/* react-text: 248 */}หมายเหตุ{/* /react-text */}<span className="order">
                                                                <span className="dropdown">
                                                                    <span className="caret" style={{ margin: '10px 0px 10px 5px', color: 'rgb(204, 204, 204)' }} /></span>
                                                                <span className="dropup"><span className="caret" style={{ margin: '10px 0px', color: 'rgb(204, 204, 204)' }} />
                                                                </span>
                                                            </span>
                                                            <div />
                                                        </th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        <div className="react-bs-container-body" style={{ height: '100%' }}><table className="table table-striped table-bordered table-hover"><colgroup><col style={{ width: 30, minWidth: 30 }} /><col className="" style={{ display: 'none' }} /><col className="" /><col className="" style={{ width: 85, minWidth: 85 }} /><col className="" /><col className="" /><col className="" /><col className="" /><col className="" /><col className="" /></colgroup><tbody><tr className=""   ><td data-toggle="collapse" colSpan={10} className="react-bs-table-no-data">There is no data to display</td></tr></tbody></table></div>
                                    </div>
                                    <div className="react-bs-table-pagination">
                                        <div className="row" style={{ marginTop: 15 }}>
                                            <div>
                                                <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                                    <p style={{ color: 'grey', position: 'absolute', fontSize: 14, padding: 0, margin: '9px 60px' }}>
                                                        {/* react-text: 324 */}แสดงข้อมูล{/* /react-text */}{/* react-text: 325 */}0{/* /react-text */}{/* react-text: 326 */}-{/* /react-text */}{/* react-text: 327 */}0{/* /react-text */}{/* react-text: 328 */} จาก {/* /react-text */}{/* react-text: 329 */}0{/* /react-text */}</p>
                                                    <span className="dropdown  " style={{ visibility: 'visible' }}>
                                                        <button className="btn btn-default dropdown-toggle" id="pageDropDown" data-toggle="dropdown" aria-expanded="false">{/* react-text: 332 */}5{/* /react-text */}<span>{/* react-text: 334 */} {/* /react-text */}
                                                            <span className="caret" /></span>
                                                        </button>
                                                        <ul className="dropdown-menu" role="menu" aria-labelledby="pageDropDown">
                                                            <li role="presentation">
                                                                <a role="menuitem" tabIndex={-1} href="#" data-page={5}>5</a>
                                                            </li><li role="presentation">
                                                                <a role="menuitem" tabIndex={-1} href="#" data-page={10}>10</a>
                                                            </li><li role="presentation">
                                                                <a role="menuitem" tabIndex={-1} href="#" data-page={25}>25</a>
                                                            </li><li role="presentation"><a role="menuitem" tabIndex={-1} href="#" data-page="[object Object]">All</a>
                                                            </li></ul></span>
                                                </div>
                                                <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6" style={{ display: 'block' }}>
                                                    <ul className="react-bootstrap-table-page-btns-ul pagination" />
                                                </div>
                                            </div>
                                        </div>
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
