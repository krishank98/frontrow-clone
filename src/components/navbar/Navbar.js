import React from 'react'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../images/app_logo_white.svg'

const Navbar = () => {
    return (
        <>
            <div>
                <div className="container-fluid fixed-top " style={{ padding: " 0px 136px" }}>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col ">
                                <div>
                                    <img src={img} alt="" srcset="" />
                                </div>
                            </div>
                            <div className="col-8  "></div>
                            <div className="col-1 " >
                                <a href="" data-toggle="modal" data-target="#exampleModalCenter">LOGIN </a>
                            </div>
                            <div className="col-1 " >
                                <a href="" data-toggle="modal" data-target="#exampleModalCenter">SIGNUP </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
