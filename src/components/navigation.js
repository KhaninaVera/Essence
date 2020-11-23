import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../App";


function Navigation () {
    return (
        <>
             <nav className="classy-navbar" id="essenceNav">

                <a className="nav-brand" href="/src/index.html"><img src="../assets/img/core-img/logo.png" alt=""/></a>

                <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span/> <span></span> <span></span> </span>
                </div>

                <div className="classy-menu">

                    <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span>
                        </div>
                    </div>

                    <div className="classynav">
                        <ul>
                            <li><a href="#">Shop</a>
                                <div className="megamenu">
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Women's Collection</li>
                                        <li>Dresses</li>
                                        <li>Blouses &amp; Shirts</li>
                                        <li>T-shirts</li>
                                        <li>Rompers</li>
                                        <li>Bras &amp; Panties</li>
                                    </ul>
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Men's Collection</li>
                                        <li>T-Shirts</li>
                                        <li>Polo</li>
                                        <li>Shirts</li>
                                        <li>Jackets</li>
                                        <li>Trench</li>
                                    </ul>
                                    <ul className="single-mega cn-col-4">
                                        <li className="title">Kid's Collection</li>
                                        <li>Dresses</li>
                                        <li>Shirts</li>
                                        <li>T-shirts</li>
                                        <li>Jackets</li>
                                        <li>Trench</li>
                                    </ul>
                                    <div className="single-mega cn-col-4">
                                        <img src="../assets/img/bg-img/bg-6.jpg" alt=""/>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="/src/index.html">Home</a></li>
                                    <li><a href="/src/shop.html">Shop</a></li>
                                    <li><a href="/src/single-product-details.html">Product Details</a></li>
                                    <li><a href="/src/checkout.html">Checkout</a></li>
                                    <li><a href="/src/blog.html">Blog</a></li>
                                    <li><a href="/src/single-blog.html">Single Blog</a></li>
                                    <li><a href="/src/regular-page.html">Regular Page</a></li>
                                    <li><a href="/src/contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="/src/blog.html">Blog</a></li>
                            <li><a href="/src/contact.html">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
            </>
    );
}
export default Navigation;