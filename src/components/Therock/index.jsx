import React from 'react'
import './index.css'

export default function Therock() {
  return (
    <div className="container-fluid">
    <div className="container">
        <div className="therock">
            <div className="col">
                <img className='therock' src={require('../../assets/images/therock.svg').default}/>
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
