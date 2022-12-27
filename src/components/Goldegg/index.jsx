import React from 'react'
import './index.css'

export default function Goldegg() {
  return (
    <div className="container-fluid">
    <div className="container">
        <div className="goldegg">
            <div className="col">
                <img className='goldegg' src={require('../../assets/images/goldegg.svg').default}/>
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
