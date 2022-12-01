import React, { useState } from 'react'
import './index.scss'
import Category from '../Category';
import Caro from "../../assets/images/icon-category/caro.svg";
import flapbird from "../../assets/images/flapbird.svg";
import chichbongbong from "../../assets/images/chichbongbong.svg";
import Goldegg from "../../assets/images/goldegg.svg";
import Primary from "../../assets/images/primary.svg"
import SweetPagination from "sweetpagination";
import Popup from "../Popup";

const posts = [
    { id: "1", title: "Category ",content: "This game is very fun telling the story of a wise prince. this game is 3d and very visualization", img: Caro, icon: Primary, titleicon: "1289 Play times" },
    { id: "2", title: "Caro",content: "This game is very fun telling the story of a wise prince. this game is 3d and very visualization", img: flapbird, icon: Primary, titleicon: "1289 Play times" },
    { id: "3", title: "chichbongbong",content: "This game is very fun telling the story of a wise prince. this game is 3d and very visualization", img: chichbongbong, icon: Primary, titleicon: "1289 Play times" },
    { id: "4", title: "Goldegg",content: "This game is very fun telling the story of a wise prince. this game is 3d and very visualization", img: Goldegg, icon: Primary, titleicon: "1289 Play times" },
    { id: "5", title: "Primary",content: "This game is very fun telling the story of a wise prince. this game is 3d and very visualization", img: flapbird, icon: Primary, titleicon: "1289 Play times" }
];

export default function Redeem() {
    const [currentPageData, setCurrentPageData] = useState([]);
    const [detailId, setDetailId] = useState()
    return (
        <>
            <section id="redeem" className="redeem">
                <div className='container'>
                    <div className='row'>
                        {currentPageData.map((item) => {
                            return (
                                <div className='col-6' >
                                    <div class="redeem__grid">
                                        <div class="redeem__item" key={item.id}>
                                            <div class="redeem__item img">
                                                <img src={item.img} alt="" className='w-100' onClick={() => setDetailId(item)} />
                                            </div>
                                            <div class="redeem__item title">
                                                <div className='h3 text-light'>{item.title}</div>
                                            </div>
                                            <div class="redeem__item desc text-light">
                                                <img src={item.icon} alt="" className=''/>
                                                <p>{item.titleicon}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='col-sm-12 d-flex justify-content-center align-items-center text-center"'>
                        <div className="container">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col text-end">
                                    <a href="#" className="pagination__prev">
                                        <i className="fas fa-caret-left"></i>
                                    </a>
                                </div>
                                <div className="col">
                                    <SweetPagination
                                        currentPageData={setCurrentPageData}
                                        getData={posts}
                                        dataPerPage={4}
                                        navigation={true}
                                        getStyle={'style-custom'}
                                    />
                                </div>
                                <div className="col">
                                    <a href="#" className="pagination__next">
                                        <i className="fas fa-caret-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {detailId && 
                        <div className='text-left'>
                           <Popup  detailId ={detailId}  toggle={()=>setDetailId(null)}/>
                        </div>
                    }
                </div>
                <Category />
            </section>
        </>
    )
}
