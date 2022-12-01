import React from 'react'
import './index.scss'
export default function Popup({ detailId, toggle}) {    
    return (
        <section id='popup' className='popup'>
            <div className='container'>
                <div className='row'>
                    <div className='popup' key={detailId.id}>
                        <div className='popup_inner'>
                            <span onClick={toggle}>x</span>
                            <div className='img d-flex justify-content-center align-content-center'>
                                <img src={detailId.img} className="w-100" />
                            </div>
                            <div className='row title d-flex justify-content-center align-items-center text-center'>
                                <div className='h1 text-light fs-4'>{detailId.title}</div>
                                <p>{detailId.content}</p>
                                <div className="modal-content-block__btn">
                                    <button>Play now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
