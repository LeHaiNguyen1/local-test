import React from 'react'
import './index.scss'

export default function Navbar() {
    return (
        <section id="navbar" className='navbar'>
            <div className='container d-flex justify-content-center'>
                <div class="header">
                    <div class="row">
                        <div class="col d-flex justify-content-start align-items-center">
                            <div class="header__logo">
                                <img src={require('../../assets/images/logo-text.svg').default}/>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end align-items-center">
                            <div class="header__notify">
                                <button>
                                    <img src={require('../../assets/images/notification.svg').default} className="w-100"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
