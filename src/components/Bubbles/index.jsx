import React from 'react'
import './index.css'

export default function Bubbles() {
  return (
    <div className="container-fluid">
    <div className="container">
        <div className="bubbles">
            <div className="col">
                <img className='bubbles' src={require('../../assets/images/chichbongbong.svg').default}/>
            </div>
            <div className="col">
                <button className="btn-flap d-flex justify-content-center align-items-center">
                    Home
                </button>
                <button className="btn-flap d-flex justify-content-center align-items-center">
                    Invite
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
