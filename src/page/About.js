import { Component } from "react";
import {Link,NavLink} from "react-router-dom"

class About extends Component{
    render() {
        return (
          <div>
            <title>Fashion Hub Ecommerce Category Bootstrap Responsive Website Template| About :: w3layouts</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="keywords" content="Fashion Hub Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
        SmartPhone Compatible web template, free WebDesigns for Nokia, Samsung, LG, Sony Ericsson, Motorola web design" />
            {/* Custom Theme files */}
            <link href="css/bootstrap.css" type="text/css" rel="stylesheet" media="all" />
            {/* shop css */}
            <link href="css/shop.css" type="text/css" rel="stylesheet" media="all" />
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            {/* Owl-Carousel-CSS */}
            <link href="css/style.css" type="text/css" rel="stylesheet" media="all" />
            {/* font-awesome icons */}
            <link href="css/fontawesome-all.min.css" rel="stylesheet" />
            {/* //Custom Theme files */}
            {/* online-fonts */}
            <link href="//fonts.googleapis.com/css?family=Elsie+Swash+Caps:400,900" rel="stylesheet" />
            <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i" rel="stylesheet" />
            {/* //online-fonts */}
            {/* header */}
            <header>
              <div className="container">
                {/* top nav */}
                <nav className="top_nav d-flex pt-3 pb-1">
                  {/* logo */}
                  <h1>
                    <a className="navbar-brand" href="index.html">fh
                    </a>
                  </h1>
                  {/* //logo */}
                  <div className="w3ls_right_nav ml-auto d-flex">
                    {/* search form */}
                    <form className="nav-search form-inline my-0 form-control" action="#" method="post">
                      <select className="form-control input-lg" name="category">
                        <option value="all">Search our store</option>
                        <optgroup label="Mens">
                          <option value="T-Shirts">T-Shirts</option>
                          <option value="coats-jackets">Coats &amp; Jackets</option>
                          <option value="Shirts">Shirts</option>
                          <option value="Suits & Blazers">Suits &amp; Blazers</option>
                          <option value="Jackets">Jackets</option>
                          <option value="Sweat Shirts">Trousers</option>
                        </optgroup>
                        <optgroup label="Womens">
                          <option value="Dresses">Dresses</option>
                          <option value="T-shirts">T-shirts</option>
                          <option value="skirts">Skirts</option>
                          <option value="jeans">Jeans</option>
                          <option value="Tunics">Tunics</option>
                        </optgroup>
                        <optgroup label="Girls">
                          <option value="Dresses">Dresses</option>
                          <option value="T-shirts">T-shirts</option>
                          <option value="skirts">Skirts</option>
                          <option value="jeans">Jeans</option>
                          <option value="Tops">Tops</option>
                        </optgroup>
                        <optgroup label="Boys">
                          <option value="T-Shirts">T-Shirts</option>
                          <option value="coats-jackets">Coats &amp; Jackets</option>
                          <option value="Shirts">Shirts</option>
                          <option value="Suits & Blazers">Suits &amp; Blazers</option>
                          <option value="Jackets">Jackets</option>
                          <option value="Sweat Shirts">Sweat Shirts</option>
                        </optgroup>
                      </select>
                      <input className="btn btn-outline-secondary  ml-3 my-sm-0" type="submit" defaultValue="Search" />
                    </form>
                    {/* search form */}
                    <div className="nav-icon d-flex">
                      {/* sigin and sign up */}
                      <a className="text-dark login_btn align-self-center mx-3" href="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
                        <i className="far fa-user" />
                      </a>
                      {/* sigin and sign up */}
                      {/* shopping cart */}
                      <div className="cart-mainf">
                        <div className="hubcart hubcart2 cart cart box_1">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" defaultValue="_cart" />
                            <input type="hidden" name="display" defaultValue={1} />
                            <button className="btn top_hub_cart mt-1" type="submit" name="submit" value title="Cart">
                              <i className="fas fa-shopping-bag" />
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* //shopping cart ends here */}
                    </div>
                  </div>
                </nav>
                {/* //top nav */}
                {/* bottom nav */}
                <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto text-center">
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">Home
                          <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Men's clothing</a>
                        <div className="dropdown-menu" style={{width: '100%'}}>
                          <div className="px-0 container">
                            <div className="row">
                              <div className="col-md-4">
                                <a className="dropdown-item" href="men.html">T-Shirts</a>
                                <a className="dropdown-item" href="men.html">Coats</a>
                                <a className="dropdown-item" href="men.html">Shirts</a>
                                <a className="dropdown-item" href="men.html">Suits &amp; Blazers</a>
                                <a className="dropdown-item" href="men.html">Jackets</a>
                                <a className="dropdown-item" href="men.html">Trousers</a>
                              </div>
                              <div className="col-md-4">
                                <a className="dropdown-item" href="men.html">T-Shirts</a>
                                <a className="dropdown-item" href="men.html">Trousers</a>
                                <a className="dropdown-item" href="men.html">Shirts</a>
                                <a className="dropdown-item" href="men.html">Suits &amp; Blazers</a>
                                <a className="dropdown-item" href="men.html">Coats &amp; Jackets</a>
                                <a className="dropdown-item" href="men.html">Jackets</a>
                              </div>
                              <div className="col-md-4">
                                <a className="dropdown-item" href="men.html">T-Shirts</a>
                                <a className="dropdown-item" href="men.html">Coats</a>
                                <a className="dropdown-item" href="men.html">Shirts</a>
                                <a className="dropdown-item" href="men.html">Suits &amp; Blazers</a>
                                <a className="dropdown-item" href="men.html">Jackets</a>
                                <a className="dropdown-item" href="men.html">Trousers</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Women's clothing</a>
                        <div className="dropdown-menu" style={{width: '100%'}}>
                          <div className="px-0 container">
                            <div className="row">
                              <div className="col-md-4">
                                <a className="dropdown-item" href="women.html">Dresses</a>
                                <a className="dropdown-item" href="women.html">T-shirts</a>
                                <a className="dropdown-item" href="women.html">Skirts</a>
                                <a className="dropdown-item" href="women.html">Jeans</a>
                                <a className="dropdown-item" href="women.html">Tunics</a>
                              </div>
                              <div className="col-md-4">
                                <a className="dropdown-item" href="women.html">T-shirts</a>
                                <a className="dropdown-item" href="women.html">Dresses</a>
                                <a className="dropdown-item" href="women.html">Tunics</a>
                                <a className="dropdown-item" href="women.html">Skirts</a>
                                <a className="dropdown-item" href="women.html">Jeans</a>
                              </div>
                              <div className="col-md-4">
                                <a className="dropdown-item" href="women.html">Dresses</a>
                                <a className="dropdown-item" href="women.html">T-shirts</a>
                                <a className="dropdown-item" href="women.html">Skirts</a>
                                <a className="dropdown-item" href="women.html">Jeans</a>
                                <a className="dropdown-item" href="women.html">Tunics</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Kids Clothing</a>
                        <div className="dropdown-menu" style={{width: '100%'}}>
                          <div className="container">
                            <div className="row w3_kids  py-3">
                              <div className="col-md-3 ">
                                <span className="bg-light">Boy's Clothing</span>
                                <a className="dropdown-item" href="boys.html">T-Shirts</a>
                                <a className="dropdown-item" href="boys.html">Coats</a>
                                <a className="dropdown-item" href="boys.html">Shirts</a>
                                <a className="dropdown-item" href="boys.html">Suits &amp; Blazers</a>
                                <a className="dropdown-item" href="boys.html">Jackets</a>
                                <a className="dropdown-item" href="boys.html">Trousers</a>
                              </div>
                              <div className="col-md-3">
                                <a className="dropdown-item mt-4" href="boys.html">T-Shirts</a>
                                <a className="dropdown-item" href="boys.html">Coats</a>
                                <a className="dropdown-item" href="boys.html">Shirts</a>
                                <a className="dropdown-item" href="boys.html">Suits &amp; Blazers</a>
                                <a className="dropdown-item" href="boys.html">Jackets</a>
                                <a className="dropdown-item" href="boys.html">Trousers</a>
                              </div>
                              <div className="col-md-3">
                                <span>Girl's Clothing</span>
                                <a className="dropdown-item" href="girls.html">T-shirts</a>
                                <a className="dropdown-item" href="girls.html">Dresses</a>
                                <a className="dropdown-item" href="girls.html">Tunics</a>
                                <a className="dropdown-item" href="girls.html">Skirts</a>
                                <a className="dropdown-item" href="girls.html">Jeans</a>
                                <a className="dropdown-item" href="girls.html">Midi</a>
                              </div>
                              <div className="col-md-3">
                                <a className="dropdown-item  mt-4" href="girls.html">Tunics</a>
                                <a className="dropdown-item" href="girls.html">Skirts</a>
                                <a className="dropdown-item" href="girls.html">T-shirts</a>
                                <a className="dropdown-item" href="girls.html">Dresses</a>
                                <a className="dropdown-item" href="girls.html">Jeans</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="about.html">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">Blog</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* //bottom nav */}
              </div>
              {/* //header container */}
            </header>
            {/* //header */}
            {/* inner banner */}
            <div className="ibanner_w3 pt-sm-5 pt-3">
              <h4 className="head_agileinfo text-center text-capitalize text-center pt-5">
                <span>f</span>ashion
                <span>h</span>ub</h4>
            </div>
            {/* //inner banner */}
            {/* //inner banner */}
            {/* breadcrumbs */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">About</li>
              </ol>
            </nav>
            {/* //breadcrumbs */}
            {/*services*/}
            <div className="agileits-services" id="services">
              <div className="no-gutters agileits-services-row row">
                <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
                  <span className="fas fa-sync-alt p-4" />
                  <h4 className="mt-2 mb-3">30 days replacement</h4>
                </div>
                <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
                  <span className="fas fa-gift p-4" />
                  <h4 className="mt-2 mb-3">Gift Card</h4>
                </div>
                <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
                  <span className="fas fa-lock p-4" />
                  <h4 className="mt-2 mb-3">secure payments</h4>
                </div>
                <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
                  <span className="fas fa-shipping-fast p-4" />
                  <h4 className="mt-2 mb-3">free shipping</h4>
                </div>
              </div>
            </div>
            {/* //services*/}
            {/* about */}
            <div className="row no-gutters pb-5">
              <div className="col-sm-4">
                <div className="hovereffect">
                  <img className="img-fluid" src="images/a1.jpg" alt="" />
                  <div className="overlay">
                    <h5>women's fashion</h5>
                    <a className="info" href="women.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="hovereffect">
                  <img className="img-fluid" src="images/a2.jpg" alt="" />
                  <div className="overlay">
                    <h5>men's fashion</h5>
                    <a className="info" href="men.html">Shop Now</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="hovereffect">
                  <img className="img-fluid" src="images/a3.jpg" alt="" />
                  <div className="overlay">
                    <h5>kid's fashion</h5>
                    <a className="info" href="girls.html">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            {/* //about */}
            {/* product tabs */}
            <section className="tabs_pro py-md-5 pt-sm-3 pb-5">
              <h5 className="head_agileinfo text-center text-capitalize pb-5">
                <span>s</span>mart clothing</h5>
              <div className="tabs tabs-style-line pt-md-5">
                <nav className="container">
                  <ul id="clothing-nav" className="nav nav-tabs tabs-style-line" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" href="#women" id="women-tab" role="tab" data-toggle="tab" aria-controls="women" aria-expanded="true">Women's Fashion</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#men" role="tab" id="men-tab" data-toggle="tab" aria-controls="men">Men's Fashion
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#girl" role="tab" id="girl-tab" data-toggle="tab" aria-controls="girl">Girl's Fashion</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#boy" role="tab" id="boy-tab" data-toggle="tab" aria-controls="boy">Boy's Fashion</a>
                    </li>
                  </ul>
                </nav>
                {/* Content Panel */}
                <div id="clothing-nav-content" className="tab-content py-sm-5">
                  <div role="tabpanel" className="tab-pane fade show active" id="women" aria-labelledby="women-tab">
                    <div id="owl-demo" className="owl-carousel text-center">
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pf1.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="womens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Self Design Women's Tunic</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$28.00</p>
                              <p className="line-through">$35.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Self Design Women's Tunic" />
                              <input type="hidden" name="amount" defaultValue={28.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pf2.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="womens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Embroidered Women's Tunic</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$24.99</p>
                              <p className="line-through">$29.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Embroidered Women's Tunic" />
                              <input type="hidden" name="amount" defaultValue="24.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pf3.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="womens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Sleeveless Women's Top</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$20.99</p>
                              <p className="line-through">$26.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Sleeveless Women's Top" />
                              <input type="hidden" name="amount" defaultValue="20.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pf9.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="womens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Slim Women's Blue Jeans</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$19.99</p>
                              <p className="line-through">$24.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Men's Hooded Blue T-Shirt" />
                              <input type="hidden" name="amount" defaultValue="19.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pf11.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="womens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Slim Women's Blue Jeans</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$14.99</p>
                              <p className="line-through">$18.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Slim Women's Blue Jeans" />
                              <input type="hidden" name="amount" defaultValue="14.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        <div className="product-men p-3 text-center">
                          <img src="images/p2.png" className="img-responsive" alt="" />
                          <a href="women.html" className="btn btn-lg bg-info text-white">view more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="men" aria-labelledby="men-tab">
                    <div id="owl-demo1" className="owl-carousel text-center">
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pm1.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="mens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Solid Formal Black Shirt</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$40.00</p>
                              <p className="line-through">$50.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Solid Formal Black Shirt" />
                              <input type="hidden" name="amount" defaultValue={40.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pm2.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="mens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Solid Formal Brown Shirt</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$24.99</p>
                              <p className="line-through">$35.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Solid Formal Brown Shirt" />
                              <input type="hidden" name="amount" defaultValue="24.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      {/* card */}
                      <div className="item">
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pm11.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="mens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Black Casual Men's Blazer</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$20.00</p>
                              <p className="line-through">$25.00</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Black Casual Men's Blazer" />
                              <input type="hidden" name="amount" defaultValue={20.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pt1.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="mens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Slim Fit Men's Black Trousers</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$14.99</p>
                              <p className="line-through">$18.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Slim Fit Men's Black Trousers" />
                              <input type="hidden" name="amount" defaultValue="18.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pt2.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="mens.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Slim Fit Men's Denim Jeans</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$24.99</p>
                              <p className="line-through">$35.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Slim Fit Men's Denim Jeans" />
                              <input type="hidden" name="amount" defaultValue="24.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className=" card product-men p-3 ">
                          <div className="men-thumb-item ">
                            <img src="images/pt3.jpg " alt="img " className="card-img-top " />
                            <div className="men-cart-pro ">
                              <div className="inner-men-cart-pro ">
                                <a href="mens.html " className="link-product-add-cart ">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body py-3 px-2 ">
                            <h5 className="card-title text-capitalize ">Slim Fit Men's Gold Trousers</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold ">$14.99</p>
                              <p className="line-through ">$18.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Slim Fit Men's Gold Trousers" />
                              <input type="hidden" name="amount" defaultValue="14.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        <div className="product-men p-3 text-center">
                          <img src="images/p2.png" className="img-responsive" alt="" />
                          <a href="men.html" className="btn btn-lg bg-info text-white">view more</a>
                        </div>
                        {/* //card */}
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="girl" aria-labelledby="girl-tab">
                    <div id="owl-demo2" className="owl-carousel text-center">
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pg1.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="girl.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Midi/Knee Length Casual Dress</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$20.00</p>
                              <p className="line-through">$39.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Casual Dress" />
                              <input type="hidden" name="amount" defaultValue={20.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pg2.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="girl.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Midi/Knee Length Casual Dress</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$24.99</p>
                              <p className="line-through">$34.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Casual Dress" />
                              <input type="hidden" name="amount" defaultValue="24.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pg3.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="girl.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Midi/Knee Length Party Dress</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$14.99</p>
                              <p className="line-through">$27.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                              <input type="hidden" name="amount" defaultValue="14.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3 out_w3">
                          <div className="men-thumb-item position-relative">
                            <img src="images/pg7.jpg" alt="img" className="card-img-top" />
                            <span className="px-2 position-absolute">out of stock</span>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Girls Party Top and Skirt Set</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$19.00</p>
                              <p className="line-through">$25.00</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <button type="submit" className="hub-cart phub-cart btn">
                              <i className="fa fa-cart-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pg4.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="girl.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Girl's Full Length Party Dress </h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$20.00</p>
                              <p className="line-through">$35.00</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Full Length Party Dress" />
                              <input type="hidden" name="amount" defaultValue={20.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pg5.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="girl.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Midi/Knee Length Party Dress</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$18.00</p>
                              <p className="line-through">$25.00</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                              <input type="hidden" name="amount" defaultValue={18.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        <div className="product-men p-3 text-center">
                          <img src="images/p2.png" className="img-responsive" alt="" />
                          <a href="girls.html" className="btn btn-lg bg-info text-white">view more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="boy" aria-labelledby="boy-tab">
                    <div id="owl-demo3" className="owl-carousel text-center">
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pb1.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="boy.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Shirt, Waistcoat and Pant Set</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$21.00</p>
                              <p className="line-through">$39.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Shirt, Waistcoat and Pant Set" />
                              <input type="hidden" name="amount" defaultValue={21.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pb2.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="boy.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Festive Kurta and Pyjama Set</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$19.99</p>
                              <p className="line-through">$29.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Festive Kurta and Pyjama Set" />
                              <input type="hidden" name="amount" defaultValue="19.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pb3.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="boy.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Boys Casual Shirt and Jeans</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$17.99</p>
                              <p className="line-through">$24.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Boys Casual Shirt and Jeans" />
                              <input type="hidden" name="amount" defaultValue="24.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3 out_w3">
                          <div className="men-thumb-item position-relative">
                            <img src="images/pb7.jpg" alt="img" className="card-img-top" />
                            <span className="px-2 position-absolute">out of stock</span>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Casual Blazer,Shirt and Trouser Set</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$18.00</p>
                              <p className="line-through">$26.00</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <button type="submit" className="hub-cart phub-cart btn">
                              <i className="fa fa-cart-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pb4.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="boy.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Dungaree Casual Solid Denim</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$19.99</p>
                              <p className="line-through">$24.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Dungaree Casual Solid Denim" />
                              <input type="hidden" name="amount" defaultValue="19.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pb5.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="boy.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Boy's Casual Blue T-Shirt</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$15.00</p>
                              <p className="line-through">$20.00</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Boy's Casual Blue T-Shirt" />
                              <input type="hidden" name="amount" defaultValue={15.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pb6.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="boy.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Boy's Casual Grey T-Shirt</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$10.00</p>
                              <p className="line-through">$25.00</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Boy's Casual Grey T-Shirt" />
                              <input type="hidden" name="amount" defaultValue={10.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pb8.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="boy.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Casual Shirt and Denim Jeans</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$15.99</p>
                              <p className="line-through">$25.99</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Casual Shirt and Denim Jeans" />
                              <input type="hidden" name="amount" defaultValue="15.99" />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        {/* card */}
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src="images/pb9.jpg" alt="img" className="card-img-top" />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <a href="boy.html" className="link-product-add-cart">Quick View</a>
                              </div>
                            </div>
                          </div>
                          {/* card body */}
                          <div className="card-body  py-3 px-2">
                            <h5 className="card-title text-capitalize">Festive Kurta And Pyjama Set</h5>
                            <div className="card-text d-flex justify-content-between">
                              <p className="text-dark font-weight-bold">$18.00</p>
                              <p className="line-through">$25.00</p>
                            </div>
                          </div>
                          {/* card footer */}
                          <div className="card-footer d-flex justify-content-end">
                            <form action="#" method="post">
                              <input type="hidden" name="cmd" defaultValue="_cart" />
                              <input type="hidden" name="add" defaultValue={1} />
                              <input type="hidden" name="hub_item" defaultValue="Festive Kurta And Pyjama Set" />
                              <input type="hidden" name="amount" defaultValue={18.00} />
                              <button type="submit" className="hub-cart phub-cart btn">
                                <i className="fa fa-cart-plus" aria-hidden="true" />
                              </button>
                              <a href="#" data-toggle="modal" data-target="#myModal1" />
                            </form>
                          </div>
                        </div>
                        {/* //card */}
                      </div>
                      <div className="item">
                        <div className="product-men p-3 text-center">
                          <img src="images/p2.png" className="img-responsive" alt="" />
                          <a href="boys.html" className="btn btn-lg bg-info text-white">view more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* //product tabs */}
            {/* insta posts */}
            <section className="py-lg-5">
              {/* insta posts */}
              <h5 className="head_agileinfo text-center text-capitalize pb-5">
                <span>s</span>hop on insta</h5>
              <div className="gallery row no-gutters pt-lg-5">
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i1.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 56</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 2</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i2.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 89</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 5</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i3.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 42</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 1</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i4.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 38</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 0</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i5.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 38</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 0</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i6.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 38</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 0</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gallery row no-gutters pb-5">
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i7.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 56</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 2</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i8.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 89</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 5</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i9.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 42</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 1</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i10.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 38</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 0</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i11.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 38</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 0</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-4 col-6 gallery-item">
                  <img src="images/i12.jpg" className="img-fluid" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <i className="fas fa-heart" /> 38</li>
                      <li className="gallery-item-comments">
                        <i className="fas fa-comment" /> 0</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* //insta posts */}
            <footer>
              <div className="footerv2-w3ls">
                <div className="footer-w3lagile-innerr">
                  {/* footer-top */}
                  <div className="container-fluid">
                    <div className="row  footer-v2grids w3-agileits">
                      {/* services */}
                      <div className="col-lg-2 col-sm-6 footer-v2grid">
                        <h4>Support</h4>
                        <ul>
                          <li>
                            <a href="payment.html">Payment</a>
                          </li>
                          <li>
                            <a href="#">Shipping</a>
                          </li>
                          <li>
                            <a href="#">Cancellation &amp; Returns</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                        </ul>
                      </div>
                      {/* //services */}
                      {/* latest posts */}
                      <div className="col-lg-3 col-sm-6 footer-v2grid mt-sm-0 mt-5">
                        <h4>Latest Blog</h4>
                        <div className="footer-v2grid1 row">
                          <div className="col-4 footer-v2grid1-left">
                            <a href="blog.html">
                              <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                            </a>
                          </div>
                          <div className="col-8 footer-v2grid1-right p-0">
                            <a href="blog.html">eveniie arcet ut moles morbi dapiti</a>
                          </div>
                        </div>
                        <div className="footer-v2grid1 row my-2">
                          <div className="col-4 footer-v2grid1-left">
                            <a href="blog.html">
                              <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                            </a>
                          </div>
                          <div className="col-8 footer-v2grid1-right p-0">
                            <a href="blog.html">earum rerum tenmorbi dapiti et</a>
                          </div>
                        </div>
                        <div className="footer-v2grid1 row">
                          <div className="col-4 footer-v2grid1-left">
                            <a href="blog.html">
                              <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                            </a>
                          </div>
                          <div className="col-8 footer-v2grid1-right p-0">
                            <a href="blog.html">morbi dapiti eveniet ut molesti</a>
                          </div>
                        </div>
                      </div>
                      {/* //latest posts */}
                      {/* locations */}
                      <div className="col-lg-2 col-sm-6 footer-v2grid my-lg-0 my-5">
                        <h4>office locations</h4>
                        <ul>
                          <li>
                            <a href="#">new jersey</a>
                          </li>
                          <li>
                            <a href="#">texas</a>
                          </li>
                          <li>
                            <a href="#">michigan</a>
                          </li>
                          <li>
                            <a href="#">cannada</a>
                          </li>
                          <li>
                            <a href="#">brazil</a>
                          </li>
                          <li>
                            <a href="#">california</a>
                          </li>
                        </ul>
                      </div>
                      {/* //locations */}
                      {/* flickr posts */}
                      <div className="col-lg-3 col-sm-6 footer-v2grid my-lg-0 my-sm-5">
                        <h4 className="b-log">
                          flickr posts
                        </h4>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                        <div className="footer-v2grid-instagram">
                          <a href="#">
                            <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                          </a>
                        </div>
                      </div>
                      {/* //flickr posts */}
                      {/* popular tags */}
                      <div className="col-lg-2  footer-v2grid mt-sm-0 mt-5">
                        <h4>popular tags</h4>
                        <ul className="w3-tag2">
                          <li>
                            <a href="shop.html">amet</a>
                          </li>
                          <li>
                            <a href="men.html">placerat</a>
                          </li>
                          <li>
                            <a href="shop.html">Proin </a>
                          </li>
                          <li>
                            <a href="boys.html">vehicula</a>
                          </li>
                          <li>
                            <a href="shop.html">diam</a>
                          </li>
                          <li>
                            <a href="women.html">velit</a>
                          </li>
                          <li>
                            <a href="shop.html">felis</a>
                          </li>
                          <li>
                            <a href="shop.html">mauris</a>
                          </li>
                          <li>
                            <a href="girls.html">amet</a>
                          </li>
                          <li>
                            <a href="shop.html">placerat</a>
                          </li>
                          <li>
                            <a href="shop.html">Proin </a>
                          </li>
                          <li>
                            <a href="index.html">vehicula</a>
                          </li>
                          <li>
                            <a href="shop.html">diam</a>
                          </li>
                          <li>
                            <a href="men.html">velit</a>
                          </li>
                          <li>
                            <a href="shop.html">felis</a>
                          </li>
                          <li>
                            <a href="women.html">mauris</a>
                          </li>
                        </ul>
                      </div>
                      {/* //popular tags */}
                    </div>
                  </div>
                  {/* //footer-top */}
                  <div className="footer-bottomv2 py-5">
                    <div className="container">
                      <ul className="bottom-links-agile">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                      <h3 className="text-center follow">Follow Us</h3>
                      <ul className="social-iconsv2 agileinfo">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container-fluid py-5 footer-copy_w3ls">
                  <div className="d-lg-flex justify-content-between">
                    <div className="mt-2 sub-some align-self-lg-center">
                      <h5>Payment Method</h5>
                      <ul className="mt-4">
                        <li className="list-inline-item">
                          <img src="images/pay2.png" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src="images/pay5.png" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src="images/pay3.png" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src="images/pay7.png" alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src="images/pay8.png" alt="" />
                        </li>
                        <li className="list-inline-item ">
                          <img src="images/pay9.png" alt="" />
                        </li>
                      </ul>
                    </div>
                    <div className="cpy-right align-self-center">
                      <h2 className="agile_btxt">
                        <a href="index.html">
                          <span>f</span>ashion
                          <span>h</span>ub</a>
                      </h2>
                      <p>© 2018 Fashion Hub. All rights reserved | Design by
                        <a href="http://w3layouts.com" className="text-secondary"> W3layouts.</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* //footer */}
            {/* sign up Modal */}
            <div className="modal fade" id="myModal_btn" tabIndex={-1} role="dialog" aria-labelledby="myModal_btn" aria-hidden="true">
              <div className="agilemodal-dialog modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Register Now</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body pt-3 pb-5 px-sm-5">
                    <div className="row">
                      <div className="col-md-6 align-self-center">
                        <img src="images/p3.png" className="img-fluid" alt="login_image" />
                      </div>
                      <div className="col-md-6">
                        <form action="#" method="post">
                          <div className="form-group">
                            <label htmlFor="recipient-name1" className="col-form-label">Your Name</label>
                            <input type="text" className="form-control" placeholder=" " name="Name" id="recipient-name1" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="recipient-email" className="col-form-label">Email</label>
                            <input type="email" className="form-control" placeholder=" " name="Email" id="recipient-email" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password1" className="col-form-label">Password</label>
                            <input type="password" className="form-control" placeholder=" " name="Password" id="password1" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password2" className="col-form-label">Confirm Password</label>
                            <input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required />
                          </div>
                          <div className="sub-w3l">
                            <div className="sub-agile">
                              <input type="checkbox" id="brand2" defaultValue />
                              <label htmlFor="brand2" className="mb-3">
                                <span />I Accept to the Terms &amp; Conditions</label>
                            </div>
                          </div>
                          <div className="right-w3l">
                            <input type="submit" className="form-control" defaultValue="Register" />
                          </div>
                        </form>
                        <p className="text-center mt-3">Already a member?
                          <a href="#" data-toggle="modal" data-target="#exampleModal1" className="text-dark login_btn">
                            Login Now</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //signup modal */}
            {/* signin Modal */}
            <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModal1" aria-hidden="true">
              <div className="agilemodal-dialog modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body  pt-3 pb-5 px-sm-5">
                    <div className="row">
                      <div className="col-md-6 align-self-center">
                        <img src="images/p3.png" className="img-fluid" alt="login_image" />
                      </div>
                      <div className="col-md-6">
                        <form action="#" method="post">
                          <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Your Name</label>
                            <input type="text" className="form-control" placeholder=" " name="Name" id="recipient-name" required />
                          </div>
                          <div className="form-group">
                            <label className="col-form-label">Password</label>
                            <input type="password" className="form-control" placeholder=" " name="Password" required />
                          </div>
                          <div className="right-w3l">
                            <input type="submit" className="form-control" defaultValue="Login" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* signin Modal */}
            {/* js */}
            {/* //js */}
            {/* smooth dropdown */}
            {/* //smooth dropdown */}
            {/* script for password match */}
            {/* script for password match */}
            {/* Banner Responsiveslides */}
            {/* // Banner Responsiveslides */}
            {/* Product slider Owl-Carousel-JavaScript */}
            {/* //Product slider Owl-Carousel-JavaScript */}
            {/* cart-js */}
            {/* //cart-js */}
            {/* start-smooth-scrolling */}
            {/* //end-smooth-scrolling */}
            {/* smooth-scrolling-of-move-up */}
            {/* //smooth-scrolling-of-move-up */}
            {/* Bootstrap core JavaScript
    ================================================== */}
            {/* Placed at the end of the document so the pages load faster */}
          </div>
 );
}
}

export default About