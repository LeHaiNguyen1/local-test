import React, { useState } from 'react'
import './index.scss'
import Popup from '../Popup';
import Category from '../Category';
import Pagination from "react-custom-pagination";
import Caro from "../../assets/images/caro.svg";
import flapbird from "../../assets/images/flapbird.svg";
import chichbongbong from "../../assets/images/chichbongbong.svg";
import Goldegg from "../../assets/images/goldegg.svg";
import Primary from "../../assets/images/primary.svg"
import ReactPaginate from 'react-paginate';

export default function Redeem() {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(prevState => !prevState);
    }
    const posts = [
        { id: "1", title: "Chess Caro", img: Caro, icon: Primary, titleicon: "1289 Play times" },
        { id: "2", title: "Flap Bird", img: flapbird, icon: Primary, titleicon: "1289 Play times" },
        { id: "3", title: "Flap Bird", img: chichbongbong, icon: Primary, titleicon: "1289 Play times" },
        { id: "4", title: "Flap Bird", img: Goldegg, icon: Primary, titleicon: "1289 Play times" },
        { id: "5", title: "Flap Bird", img: flapbird, icon: Primary, titleicon: "1289 Play times" }
    ];


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (number) => {
        setCurrentPage(number);
    };
    return (
        <>
            <section id="redeem" className="redeem">
                <div className='container'>
                    <div className='row'>
                        {currentPosts.map((item) => {
                            return (
                                <div className='col-6' key={item.id}>
                                    <div class="redeem__grid">
                                        <div class="redeem__item">
                                            <div class="redeem__item img">
                                                <img src={item.img} alt="" className='w-100' />
                                            </div>
                                            <div class="redeem__item title">
                                                <h3 className='text-light'>Flap Bird</h3>
                                            </div>
                                            <div class="redeem__item desc text-light">
                                                <img src={item.icon} alt="" className='' />
                                                {item.titleicon}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='col-sm-12 d-flex justify-content-center align-items-center text-center"'>
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col text-end">
                                <a href="#" class="pagination__prev">
                                    <i class="fas fa-caret-left"></i>
                                </a>
                            </div>
                            <div class="col">
                                <Pagination
                                    totalPosts={posts.length}
                                    postsPerPage={postsPerPage}
                                    paginate={paginate}
                                    view={5}
                                    showLast={true}
                                    showFirst={true}
                                />
                            </div>
                            <div class="col">
                                <a href="#" class="pagination__next">
                                    <i class="fas fa-caret-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Category />
            </section>
        </>
    )
}
