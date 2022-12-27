import React from 'react';
import './index.css'

function Caro() {
  return (
    <div className="container-fluid">
        <div className="header">
            <div className="container">
                <div className="logo justify-content-center align-items-center">
                  <img className='caro' src={require('../../assets/images/caro-page.svg').default}/>
                </div>
            </div>
        </div>
        <div className="main">
            <div className="container">
                <div className="button justify-content-center align-items-center">
                    <a href="/lobby">
                        <button className="justify-content-center align-items-center"
                        >Home</button>
                    </a>
                    <a href="!#">
                        <button className="justify-content-center align-items-center">Invite</button>
                    </a>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Caro
