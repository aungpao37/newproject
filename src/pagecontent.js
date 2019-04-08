import React, { Component } from 'react'
import Views from './Views'
import Selectgroup from './select';
import './style.css';
export default class Pagecontent extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content" style={{ height: 'calc(100vh - 150px)', overflow: 'hidden', paddingBottom: 80 }}>
                    <div style={{ height: '100%', width: '100%', marginTop: '-15px' }} >
                        <div>
                            <Views></Views>
                            <Selectgroup></Selectgroup>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
