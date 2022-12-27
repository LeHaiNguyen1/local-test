import React from 'react'
import './index.css'

export default function Flapbird() {
  return (
    <div className="container-fluid">
    <div className="container">
        <div className="flap-bird">
            <div className="col">
                <img className='flapbird' src={require('../../assets/images/flapbird.svg').default}/>
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
