import React from 'react'
import ReactDOM from 'react-dom'
import './myStyles.css'
function PortalDemo() {
    return  ReactDOM.createPortal(
        <h1 className="format">
            Portals Demo
        </h1>
        , document.getElementById('portal-root'))
}

export default PortalDemo
