import React, {useState} from 'react'
import './index.scss'
import Caro from "../../assets/images/caro.svg";
import Primary from "../../assets/images/primary.svg";
import flapbird from "../../assets/images/flapbird.svg";
import chichbongbong from "../../assets/images/chichbongbong.svg";
import Goldegg from "../../assets/images/goldegg.svg";


const posts = [
    { id: "1", title: "Pasukan Tentara", img: Caro, titleicon: "Test1" },
    { id: "2", title: "Flap Bird", img: flapbird, titleicon: "Test2" },
    { id: "3", title: "Flap Bird", img: chichbongbong, titleicon: "Test3" },
    { id: "4", title: "Flap Bird", img: Goldegg, titleicon: "Test4" },
    { id: "5", title: "Flap Bird", img: flapbird, titleicon: "Test5" }
];
export default function Popup(props) {


    return (
        <section id='popup' className='popup'>
            <div className='container'>
                <div className='row'>
                            <div className='popup' key={posts.id}>
                                <div className='popup_inner'>
                                    <span onClick={props.closePopup}>x</span>
                                    <div className='img d-flex justify-content-center align-content-center'>
                                        <img src={props.dataFromParent} style={{width:"20%"}}/>
                                    </div>
                                    <div
                                        className='row title d-flex justify-content-center align-items-center text-center'>
                                        <h1 className='text-light fs-4'>{posts.title}</h1>
                                        <p>{props.dataFromParent.titleicon}</p>
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
