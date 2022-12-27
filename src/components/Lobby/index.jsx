import React from 'react';
import './index.css'

function Lobby() {
  return (
    <div className="container-fluid">
        <div className="lobby justify-content-center align-items-center">
            <div className="container">
                <div className="main-lobby">
                    <div className="room">
                        <div className="row">
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="">
                                    <button>7784</button>
                                </a>
                            </div>
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="">
                                    <button>Tic Tac Toe</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="room">
                        <div className="row">
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="">
                                    <button>7784</button>
                                </a>
                            </div>
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="">
                                    <button>Tic Tac Toe</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="room">
                        <div className="row">
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="">
                                    <button>7784</button>
                                </a>
                            </div>
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="">
                                    <button>Tic Tac Toe</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="room">
                        <div className="row">
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="">
                                    <button>7784</button>
                                </a>
                            </div>
                            <div className="col d-flex justify-content-start align-items-center">
                                <a href="">
                                    <button>Tic Tac Toe</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="button-search-create">
                        <div className="row">
                            <div className="col d-flex justify-content-center align-items-center">
                                <a href="">
                                    <button>SEARCH ROOM</button>
                                </a>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <a href="">
                                    <button className="bg-color">CREATE ROOM</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lobby
