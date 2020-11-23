import React, {Fragment} from "react";
import './index.css';
// import './css/core-style.css';
import './css/bootstrap.min.css';
import './css/classy-nav.min.css';
import './css/nice-select.css';
import './css/animate.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import  firstBgImg from  './img/bg-img/bg-1.jpg';
import logo from  './img/core-img/logo.png';
import heart from './img/core-img/heart.svg';
import bag from './img/core-img/bag.svg';
import user from './img/core-img/user.svg';
import sixBgImg from './img/bg-img/bg-6.jpg';
import firstProduct from './img/product-img/product-1.jpg';
import secondProduct from './img/product-img/product-2.jpg';
import thirdProduct from './img/product-img/product-3.jpg';
import fourthProduct from './img/product-img/product-4.jpg';
import fifthProduct from './img/product-img/product-5.jpg';
import sixhProduct from './img/product-img/product-6.jpg';
import seventhProduct from './img/product-img/product-7.jpg';
import eighthProduct from './img/product-img/product-8.jpg';
import ninthProduct from './img/product-img/product-9.jpg';
import OneBigProduct from './img/product-img/product-big-1.jpg';
import twoBigProduct from './img/product-img/product-big-2.jpg';
import treeBigProduct from './img/product-img/product-big-3.jpg';

// import './css/owl.carousel.css';


function AllShop () {
    return (
        <Fragment>
            <header className="header_area">
                <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
                    {/* Classy Menu */}
                    <nav className="classy-navbar" id="essenceNav">
                        {/* Logo */}
                        <a className="nav-brand" href="/public/index.html"><img src={logo} alt /></a>
                        {/* Navbar Toggler */}
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span /> <span /> <span /> </span>
                        </div>
                        {/* Menu */}
                        <div className="classy-menu">
                            {/* close btn */}
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                            </div>
                            {/* Nav Start */}
                            <div className="classynav">
                                <ul>
                                    <li><a href="#">Shop</a>
                                        <div className="megamenu">
                                            <ul className="single-mega cn-col-4">
                                                <li className="title">Women's Collection</li>
                                                <li><a href="shop.html">Dresses</a></li>
                                                <li><a href="shop.html">Blouses &amp; Shirts</a></li>
                                                <li><a href="shop.html">T-shirts</a></li>
                                                <li><a href="shop.html">Rompers</a></li>
                                                <li><a href="shop.html">Bras &amp; Panties</a></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li className="title">Men's Collection</li>
                                                <li><a href="shop.html">T-Shirts</a></li>
                                                <li><a href="shop.html">Polo</a></li>
                                                <li><a href="shop.html">Shirts</a></li>
                                                <li><a href="shop.html">Jackets</a></li>
                                                <li><a href="shop.html">Trench</a></li>
                                            </ul>
                                            <ul className="single-mega cn-col-4">
                                                <li className="title">Kid's Collection</li>
                                                <li><a href="shop.html">Dresses</a></li>
                                                <li><a href="shop.html">Shirts</a></li>
                                                <li><a href="shop.html">T-shirts</a></li>
                                                <li><a href="shop.html">Jackets</a></li>
                                                <li><a href="shop.html">Trench</a></li>
                                            </ul>
                                            <div className="single-mega cn-col-4">
                                                <img src= {sixBgImg} alt />
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="/public/index.html">Home</a></li>
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="single-product-details.html">Product Details</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="single-blog.html">Single Blog</a></li>
                                            <li><a href="regular-page.html">Regular Page</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            {/* Nav End */}
                        </div>
                    </nav>
                    {/* Header Meta Data */}
                    <div className="header-meta d-flex clearfix justify-content-end">
                        {/* Search Area */}
                        <div className="search-area">
                            <form action="#" method="post">
                                <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                                <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
                            </form>
                        </div>
                        {/* Favourite Area */}
                        <div className="favourite-area">
                            <a href="#"><img src={heart}/></a>
                        </div>
                        {/* User Login Info */}
                        <div className="user-login-info">
                            <a href="#"><img src={user}/></a>
                        </div>
                        {/* Cart Area */}
                        <div className="cart-area">
                            <a href="#" id="essenceCartBtn"><img src={bag}/> <span>3</span></a>
                        </div>
                    </div>
                </div>
            </header>
            {/* ##### Header Area End ##### */}
            {/* ##### Right Side Cart Area ##### */}
            <div className="cart-bg-overlay" />
            <div className="right-side-cart-area">
                {/* Cart Button */}
                <div className="cart-button">
                    <a href="#" id="rightSideCart"><img src={bag} /> <span>3</span></a>
                </div>
                <div className="cart-content d-flex">
                    {/* Cart List Area */}
                    <div className="cart-list">
                        {/* Single Cart Item */}
                        <div className="single-cart-item">
                            <a href="#" className="product-image">
                                <img src={firstProduct} className="cart-thumb" />
                                {/* Cart Item Desc */}
                                <div className="cart-item-desc">
                                    <span className="product-remove"><i className="fa fa-close" aria-hidden="true" /></span>
                                    <span className="badge">Mango</span>
                                    <h6>Button Through Strap Mini Dress</h6>
                                    <p className="size">Size: S</p>
                                    <p className="color">Color: Red</p>
                                    <p className="price">$45.00</p>
                                </div>
                            </a>
                        </div>
                        {/* Single Cart Item */}
                        <div className="single-cart-item">
                            <a href="#" className="product-image">
                                <img src={secondProduct} className="cart-thumb" />
                                {/* Cart Item Desc */}
                                <div className="cart-item-desc">
                                    <span className="product-remove"><i className="fa fa-close" aria-hidden="true" /></span>
                                    <span className="badge">Mango</span>
                                    <h6>Button Through Strap Mini Dress</h6>
                                    <p className="size">Size: S</p>
                                    <p className="color">Color: Red</p>
                                    <p className="price">$45.00</p>
                                </div>
                            </a>
                        </div>
                        {/* Single Cart Item */}
                        <div className="single-cart-item">
                            <a href="#" className="product-image">
                                <img src={thirdProduct} className="cart-thumb"/>
                                {/* Cart Item Desc */}
                                <div className="cart-item-desc">
                                    <span className="product-remove"><i className="fa fa-close" aria-hidden="true" /></span>
                                    <span className="badge">Mango</span>
                                    <h6>Button Through Strap Mini Dress</h6>
                                    <p className="size">Size: S</p>
                                    <p className="color">Color: Red</p>
                                    <p className="price">$45.00</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* Cart Summary */}
                    <div className="cart-amount-summary">
                        <h2>Summary</h2>
                        <ul className="summary-table">
                            <li><span>subtotal:</span> <span>$274.00</span></li>
                            <li><span>delivery:</span> <span>Free</span></li>
                            <li><span>discount:</span> <span>-15%</span></li>
                            <li><span>total:</span> <span>$232.00</span></li>
                        </ul>
                        <div className="checkout-btn mt-100">
                            <a href="checkout.html" className="btn essence-btn">check out</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### Right Side Cart End ##### */}
            {/* ##### Welcome Area Start ##### */}
            <section className="welcome_area bg-img background-overlay" style={{backgroundImage: 'url(${firstBgImg})'} }>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-content">
                                <h6>asoss</h6>
                                <h2>New Collection</h2>
                                <a href="#" className="btn essence-btn">view collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ##### Welcome Area End ##### */}
            {/* ##### Top Catagory Area Start ##### */}
            <div className="top_catagory_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Single Catagory */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(img/bg-img/bg-2.jpg)'}}>
                                <div className="catagory-content">
                                    <a href="#">Clothing</a>
                                </div>
                            </div>
                        </div>
                        {/* Single Catagory */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(img/bg-img/bg-3.jpg)'}}>
                                <div className="catagory-content">
                                    <a href="#">Shoes</a>
                                </div>
                            </div>
                        </div>
                        {/* Single Catagory */}
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: 'url(img/bg-img/bg-4.jpg)'}}>
                                <div className="catagory-content">
                                    <a href="#">Accessories</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### Top Catagory Area End ##### */}
            {/* ##### CTA Area Start ##### */}
            <div className="cta-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cta-content bg-img background-overlay" style={{backgroundImage: 'url(img/bg-img/bg-5.jpg)'}}>
                                <div className="h-100 d-flex align-items-center justify-content-end">
                                    <div className="cta--text">
                                        <h6>-60%</h6>
                                        <h2>Global Sale</h2>
                                        <a href="#" className="btn essence-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### CTA Area End ##### */}
            {/* ##### New Arrivals Area Start ##### */}
            <section className="new_arrivals_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="popular-products-slides owl-carousel">
                                {/* Single Product */}
                                <div className="single-product-wrapper">
                                    {/* Product Image */}
                                    <div className="product-img">
                                        <img src={firstProduct} alt />
                                        {/* Hover Thumb */}
                                        <img className="hover-img" src={secondProduct} alt />
                                        {/* Favourite */}
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart" />
                                        </div>
                                    </div>
                                    {/* Product Description */}
                                    <div className="product-description">
                                        <span>topshop</span>
                                        <a href="single-product-details.html">
                                            <h6>Knot Front Mini Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>
                                        {/* Hover Content */}
                                        <div className="hover-content">
                                            {/* Add to Cart */}
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn essence-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Product */}
                                <div className="single-product-wrapper">
                                    {/* Product Image */}
                                    <div className="product-img">
                                        <img src={secondProduct} alt />
                                        {/* Hover Thumb */}
                                        <img className="hover-img" src={thirdProduct} alt />
                                        {/* Favourite */}
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart" />
                                        </div>
                                    </div>
                                    {/* Product Description */}
                                    <div className="product-description">
                                        <span>topshop</span>
                                        <a href="single-product-details.html">
                                            <h6>Poplin Displaced Wrap Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>
                                        {/* Hover Content */}
                                        <div className="hover-content">
                                            {/* Add to Cart */}
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn essence-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Product */}
                                <div className="single-product-wrapper">
                                    {/* Product Image */}
                                    <div className="product-img">
                                        <img src={thirdProduct} alt />
                                        {/* Hover Thumb */}
                                        <img className="hover-img" src={fourthProduct} alt />
                                        {/* Product Badge */}
                                        <div className="product-badge offer-badge">
                                            <span>-30%</span>
                                        </div>
                                        {/* Favourite */}
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart" />
                                        </div>
                                    </div>
                                    {/* Product Description */}
                                    <div className="product-description">
                                        <span>mango</span>
                                        <a href="single-product-details.html">
                                            <h6>PETITE Crepe Wrap Mini Dress</h6>
                                        </a>
                                        <p className="product-price"><span className="old-price">$75.00</span> $55.00</p>
                                        {/* Hover Content */}
                                        <div className="hover-content">
                                            {/* Add to Cart */}
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn essence-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Product */}
                                <div className="single-product-wrapper">
                                    {/* Product Image */}
                                    <div className="product-img">
                                        <img src={fourthProduct} alt />
                                        {/* Hover Thumb */}
                                        <img className="hover-img" src={fifthProduct} alt />
                                        {/* Product Badge */}
                                        <div className="product-badge new-badge">
                                            <span>New</span>
                                        </div>
                                        {/* Favourite */}
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart" />
                                        </div>
                                    </div>
                                    {/* Product Description */}
                                    <div className="product-description">
                                        <span>mango</span>
                                        <a href="single-product-details.html">
                                            <h6>PETITE Belted Jumper Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>
                                        {/* Hover Content */}
                                        <div className="hover-content">
                                            {/* Add to Cart */}
                                            <div className="add-to-cart-btn">
                                                <a href="#" className="btn essence-btn">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ##### New Arrivals Area End ##### */}
            {/* ##### Brands Area Start ##### */}
            <div className="brands-area d-flex align-items-center justify-content-between">
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="img/core-img/brand1.png" alt />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="img/core-img/brand2.png" alt />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="img/core-img/brand3.png" alt />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="img/core-img/brand4.png" alt />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="img/core-img/brand5.png" alt />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src="img/core-img/brand6.png" alt />
                </div>
            </div>
            {/* ##### Brands Area End ##### */}
            {/* ##### Footer Area Start ##### */}
            <footer className="footer_area clearfix">
                <div className="container">
                    <div className="row">
                        {/* Single Widget Area */}
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area d-flex mb-30">
                                {/* Logo */}
                                <div className="footer-logo mr-50">
                                    <a href="#"><img src="img/core-img/logo2.png" alt /></a>
                                </div>
                                {/* Footer Menu */}
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="shop.html">Shop</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Single Widget Area */}
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area mb-30">
                                <ul className="footer_widget_menu">
                                    <li><a href="#">Order Status</a></li>
                                    <li><a href="#">Payment Options</a></li>
                                    <li><a href="#">Shipping and Delivery</a></li>
                                    <li><a href="#">Guides</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        {/* Single Widget Area */}
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area">
                                <div className="footer_heading mb-30">
                                    <h6>Subscribe</h6>
                                </div>
                                <div className="subscribtion_form">
                                    <form action="#" method="post">
                                        <input type="email" name="mail" className="mail" placeholder="Your email here" />
                                        <button type="submit" className="submit"><i className="fa fa-long-arrow-right" aria-hidden="true" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Single Widget Area */}
                        <div className="col-12 col-md-6">
                            <div className="single_widget_area">
                                <div className="footer_social_area">
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa fa-youtube-play" aria-hidden="true" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>


    );
}


export default AllShop;