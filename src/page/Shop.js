import { Component } from "react";
import {Link,NavLink} from "react-router-dom"

class Shop extends Component{
    render() {
        return(
            <div>
        <title>Fashion Hub Ecommerce Category Bootstrap Responsive Website Template| Shop :: w3layouts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="Fashion Hub Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
	SmartPhone Compatible web template, free WebDesigns for Nokia, Samsung, LG, Sony Ericsson, Motorola web design" />
        {/* Custom Theme files */}
        <link href="css/bootstrap.css" type="text/css" rel="stylesheet" media="all" />
        {/* shop css */}
        <link href="css/shop.css" type="text/css" rel="stylesheet" media="all" />
        {/* Owl Stylesheets */}
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        {/* Owl-Carousel-CSS */}
        {/* Owl-Carousel-CSS */}
        {/* <link rel="stylesheet" href="css/owl.carousel.css" type="text/css" media="all"> */}
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
                <Link className="navbar-brand" href="index.html">fh
                </Link>
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
                  <Link className="text-dark login_btn align-self-center mx-3" href="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
                    <i className="far fa-user" />
                  </Link>
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
                    <Link className="nav-link  active" href="index.html">Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Men's clothing</Link>
                    <div className="dropdown-menu" style={{width: '100%'}}>
                      <div className="px-0 container">
                        <div className="row">
                          <div className="col-md-4">
                            <Link className="dropdown-item" href="men.html">T-Shirts</Link>
                            <Link className="dropdown-item" href="men.html">Coats</Link>
                            <Link className="dropdown-item" href="men.html">Shirts</Link>
                            <Link className="dropdown-item" href="men.html">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" href="men.html">Jackets</Link>
                            <Link className="dropdown-item" href="men.html">Trousers</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" href="men.html">T-Shirts</Link>
                            <Link className="dropdown-item" href="men.html">Trousers</Link>
                            <Link className="dropdown-item" href="men.html">Shirts</Link>
                            <Link className="dropdown-item" href="men.html">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" href="men.html">Coats &amp; Jackets</Link>
                            <Link className="dropdown-item" href="men.html">Jackets</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" href="men.html">T-Shirts</Link>
                            <Link className="dropdown-item" href="men.html">Coats</Link>
                            <Link className="dropdown-item" href="men.html">Shirts</Link>
                            <Link className="dropdown-item" href="men.html">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" href="men.html">Jackets</Link>
                            <Link className="dropdown-item" href="men.html">Trousers</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Women's clothing</Link>
                    <div className="dropdown-menu" style={{width: '100%'}}>
                      <div className="px-0 container">
                        <div className="row">
                          <div className="col-md-4">
                            <Link className="dropdown-item" href="women.html">Dresses</Link>
                            <Link className="dropdown-item" href="women.html">T-shirts</Link>
                            <Link className="dropdown-item" href="women.html">Skirts</Link>
                            <Link className="dropdown-item" href="women.html">Jeans</Link>
                            <Link className="dropdown-item" href="women.html">Tunics</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" href="women.html">T-shirts</Link>
                            <Link className="dropdown-item" href="women.html">Dresses</Link>
                            <Link className="dropdown-item" href="women.html">Tunics</Link>
                            <Link className="dropdown-item" href="women.html">Skirts</Link>
                            <Link className="dropdown-item" href="women.html">Jeans</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" href="women.html">Dresses</Link>
                            <Link className="dropdown-item" href="women.html">T-shirts</Link>
                            <Link className="dropdown-item" href="women.html">Skirts</Link>
                            <Link className="dropdown-item" href="women.html">Jeans</Link>
                            <Link className="dropdown-item" href="women.html">Tunics</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Kids Clothing</Link>
                    <div className="dropdown-menu" style={{width: '100%'}}>
                      <div className="container">
                        <div className="row w3_kids  py-3">
                          <div className="col-md-3 ">
                            <span className="bg-light">Boy's Clothing</span>
                            <Link className="dropdown-item" href="boys.html">T-Shirts</Link>
                            <Link className="dropdown-item" href="boys.html">Coats</Link>
                            <Link className="dropdown-item" href="boys.html">Shirts</Link>
                            <Link className="dropdown-item" href="boys.html">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" href="boys.html">Jackets</Link>
                            <Link className="dropdown-item" href="boys.html">Trousers</Link>
                          </div>
                          <div className="col-md-3">
                            <Link className="dropdown-item mt-4" href="boys.html">T-Shirts</Link>
                            <Link className="dropdown-item" href="boys.html">Coats</Link>
                            <Link className="dropdown-item" href="boys.html">Shirts</Link>
                            <Link className="dropdown-item" href="boys.html">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" href="boys.html">Jackets</Link>
                            <Link className="dropdown-item" href="boys.html">Trousers</Link>
                          </div>
                          <div className="col-md-3">
                            <span>Girl's Clothing</span>
                            <Link className="dropdown-item" href="girls.html">T-shirts</Link>
                            <Link className="dropdown-item" href="girls.html">Dresses</Link>
                            <Link className="dropdown-item" href="girls.html">Tunics</Link>
                            <Link className="dropdown-item" href="girls.html">Skirts</Link>
                            <Link className="dropdown-item" href="girls.html">Jeans</Link>
                            <Link className="dropdown-item" href="girls.html">Midi</Link>
                          </div>
                          <div className="col-md-3">
                            <Link className="dropdown-item  mt-4" href="girls.html">Tunics</Link>
                            <Link className="dropdown-item" href="girls.html">Skirts</Link>
                            <Link className="dropdown-item" href="girls.html">T-shirts</Link>
                            <Link className="dropdown-item" href="girls.html">Dresses</Link>
                            <Link className="dropdown-item" href="girls.html">Jeans</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="about.html">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="blog.html">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="contact.html">Contact</Link>
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
        {/* breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="index.html">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}
        {/* Shop */}
        <div className="innerf-pages section">
          <div className="container">
            {/* grid right */}
            <div className="py-sm-5 py-3 right-product-grid">
              {/* card group 2 */}
              <h5 className="shop_w3 text-capitalize">
                Men's Collection</h5>
              <div className="row card-group my-sm-5 mt-5">
                {/* row2 */}
                {/* card */}
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pm11.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="mens.html" className="link-product-add-cart">Quick View</Link>
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
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pm12.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="mens.html" className="link-product-add-cart">Quick View</Link>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="card-body  py-3 px-2">
                      <h5 className="card-title text-capitalize">Blue Wedding Formal Blazer</h5>
                      <div className="card-text d-flex justify-content-between">
                        <p className="text-dark font-weight-bold">$35.00</p>
                        <p className="line-through">$44.99</p>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-end">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="hub_item" defaultValue="Blue Wedding Formal Blazer" />
                        <input type="hidden" name="amount" defaultValue={35.00} />
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="col-lg-3 col-sm-6 mt-lg-0 mt-5">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pm13.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="mens.html" className="link-product-add-cart">Quick View</Link>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="card-body  py-3 px-2">
                      <h5 className="card-title text-capitalize">Blue Casual Men's Blazer</h5>
                      <div className="card-text d-flex justify-content-between">
                        <p className="text-dark font-weight-bold">$29.99</p>
                        <p className="line-through">$34.99</p>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-end">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="hub_item" defaultValue="Casual Men's Blazer" />
                        <input type="hidden" name="amount" defaultValue={29.00} />
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                <div className="col-lg-3 col-sm-6">
                  <div className="card py-sm-5 border-0">
                    <Link className="btn-lg btn-secondary text-center m-5" href="men.html">View More</Link>
                  </div>
                </div>
                {/* //card 2 */}
              </div>
              {/* //card group */}
              {/* card group 2 */}
              <h5 className="shop_w3 text-capitalize">
                Women's Collection</h5>
              <div className="row card-group my-sm-5 mt-5">
                {/* row2 */}
                {/* card */}
                <div className="col-lg-3 col-sm-6">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pf6.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="womens.html" className="link-product-add-cart">Quick View</Link>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="card-body  py-3 px-2">
                      <h5 className="card-title text-capitalize">Casual polo Women's T-shirt</h5>
                      <div className="card-text d-flex justify-content-between">
                        <p className="text-dark font-weight-bold">$13.00</p>
                        <p className="line-through">$20.99</p>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-end">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="hub_item" defaultValue="Blue Wedding Formal Blazer" />
                        <input type="hidden" name="amount" defaultValue={13.00} />
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pf8.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="womens.html" className="link-product-add-cart">Quick View</Link>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="card-body  py-3 px-2">
                      <h5 className="card-title text-capitalize">Casual 3/4th Sleeve Top</h5>
                      <div className="card-text d-flex justify-content-between">
                        <p className="text-dark font-weight-bold">$19.00</p>
                        <p className="line-through">$24.99</p>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-end">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="hub_item" defaultValue="Casual 3/4th Sleeve Top" />
                        <input type="hidden" name="amount" defaultValue={19.00} />
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="col-lg-3 col-sm-6  mt-lg-0 mt-5">
                  <div className="card product-men p-3 out_w3">
                    <div className="men-thumb-item position-relative">
                      <img src="images/pf7.jpg" alt="img" className="card-img-top" />
                      <span className="px-2 position-absolute">out of stock</span>
                    </div>
                    {/* card body */}
                    <div className="card-body  py-3 px-2">
                      <h5 className="card-title text-capitalize">Moderno Solid Women's Tunic</h5>
                      <div className="card-text d-flex justify-content-between">
                        <p className="text-dark font-weight-bold">$27.00</p>
                        <p className="line-through">$35.00</p>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-end">
                      <button type="submit" className="hub-cart phub-cart btn">
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* //card */}
                <div className="col-lg-3 col-sm-6">
                  <div className="card py-sm-5 border-0">
                    <Link className="btn-lg btn-secondary text-center m-5" href="women.html">View More</Link>
                  </div>
                </div>
                {/* //card 2 */}
              </div>
              {/* //card group */}
              {/* card group 2 */}
              <h5 className="shop_w3 text-capitalize">
                Girl's Collection</h5>
              <div className="card-group my-sm-5 mt-5">
                {/* row2 */}
                {/* card */}
                <div className="col-lg-3 col-sm-6">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pg4.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="girl.html" className="link-product-add-cart">Quick View</Link>
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
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pg5.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="girl.html" className="link-product-add-cart">Quick View</Link>
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
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="col-lg-3 col-sm-6  mt-lg-0 mt-5">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pg8.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="girl.html" className="link-product-add-cart">Quick View</Link>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="card-body  py-3 px-2">
                      <h5 className="card-title text-capitalize">Midi/Knee Length Party Dress</h5>
                      <div className="card-text d-flex justify-content-between">
                        <p className="text-dark font-weight-bold">$14.99</p>
                        <p className="line-through">$19.99</p>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-end">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                        <input type="hidden" name="amount" defaultValue="19.99" />
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                <div className="col-lg-3 col-sm-6">
                  <div className="card py-sm-5 border-0">
                    <Link className="btn-lg btn-secondary text-center m-5" href="girls.html">View More</Link>
                  </div>
                </div>
              </div>
              {/* //card group */}
              {/* card group  */}
              <h5 className="row shop_w3 text-capitalize">
                Boy's Collection</h5>
              <div className="card-group my-5">
                {/* row1*/}
                {/* card */}
                <div className="col-lg-3 col-sm-6">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pb9.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="boy.html" className="link-product-add-cart">Quick View</Link>
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
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="col-lg-3 col-sm-6 mt-sm-0 mt-5">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pb10.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="boy.html" className="link-product-add-cart">Quick View</Link>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="card-body  py-3 px-2">
                      <h5 className="card-title text-capitalize">Party Shirt and Trouser Set</h5>
                      <div className="card-text d-flex justify-content-between">
                        <p className="text-dark font-weight-bold">$30.99</p>
                        <p className="line-through">$45.99</p>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-end">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="hub_item" defaultValue="Party Shirt and Trouser Set" />
                        <input type="hidden" name="amount" defaultValue="30.99" />
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="col-lg-3 col-sm-6  mt-lg-0 mt-5">
                  <div className="card product-men p-3">
                    <div className="men-thumb-item">
                      <img src="images/pb1.jpg" alt="img" className="card-img-top" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <Link to="boy.html" className="link-product-add-cart">Quick View</Link>
                        </div>
                      </div>
                    </div>
                    {/* card body */}
                    <div className="card-body  py-3 px-2">
                      <h5 className="card-title text-capitalize">Shirt, Waistcoat And Pant Set</h5>
                      <div className="card-text d-flex justify-content-between">
                        <p className="text-dark font-weight-bold">$14.99</p>
                        <p className="line-through">$24.99</p>
                      </div>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-end">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="add" defaultValue={1} />
                        <input type="hidden" name="hub_item" defaultValue="Shirt, Waistcoat And Pant Set" />
                        <input type="hidden" name="amount" defaultValue="14.99" />
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                        <Link to="#" data-toggle="modal" data-target="#myModal1" />
                      </form>
                    </div>
                  </div>
                </div>
                {/* //card */}
                <div className="col-lg-3 col-sm-6">
                  <div className="card py-sm-5 border-0">
                    <Link className="btn-lg btn-secondary text-center m-5" href="boys.html">View More</Link>
                  </div>
                  {/* //row  */}
                </div>
              </div>
              {/* //card group */}
            </div>
          </div>
        </div>
        {/*// Shop */}
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
                        <Link to="payment.html">Payment</Link>
                      </li>
                      <li>
                        <Link to="#">Shipping</Link>
                      </li>
                      <li>
                        <Link to="#">Cancellation &amp; Returns</Link>
                      </li>
                      <li>
                        <Link to="faq.html">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                  {/* //services */}
                  {/* latest posts */}
                  <div className="col-lg-3 col-sm-6 footer-v2grid mt-sm-0 mt-5">
                    <h4>Latest Blog</h4>
                    <div className="footer-v2grid1 row">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="blog.html">
                          <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="blog.html">eveniie arcet ut moles morbi dapiti</Link>
                      </div>
                    </div>
                    <div className="footer-v2grid1 row my-2">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="blog.html">
                          <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="blog.html">earum rerum tenmorbi dapiti et</Link>
                      </div>
                    </div>
                    <div className="footer-v2grid1 row">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="blog.html">
                          <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="blog.html">morbi dapiti eveniet ut molesti</Link>
                      </div>
                    </div>
                  </div>
                  {/* //latest posts */}
                  {/* locations */}
                  <div className="col-lg-2 col-sm-6 footer-v2grid my-lg-0 my-5">
                    <h4>office locations</h4>
                    <ul>
                      <li>
                        <Link to="#">new jersey</Link>
                      </li>
                      <li>
                        <Link to="#">texas</Link>
                      </li>
                      <li>
                        <Link to="#">michigan</Link>
                      </li>
                      <li>
                        <Link to="#">cannada</Link>
                      </li>
                      <li>
                        <Link to="#">brazil</Link>
                      </li>
                      <li>
                        <Link to="#">california</Link>
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
                      <Link to="#">
                        <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                  </div>
                  {/* //flickr posts */}
                  {/* popular tags */}
                  <div className="col-lg-2  footer-v2grid mt-sm-0 mt-5">
                    <h4>popular tags</h4>
                    <ul className="w3-tag2">
                      <li>
                        <Link to="shop.html">amet</Link>
                      </li>
                      <li>
                        <Link to="men.html">placerat</Link>
                      </li>
                      <li>
                        <Link to="shop.html">Proin </Link>
                      </li>
                      <li>
                        <Link to="boys.html">vehicula</Link>
                      </li>
                      <li>
                        <Link to="shop.html">diam</Link>
                      </li>
                      <li>
                        <Link to="women.html">velit</Link>
                      </li>
                      <li>
                        <Link to="shop.html">felis</Link>
                      </li>
                      <li>
                        <Link to="shop.html">mauris</Link>
                      </li>
                      <li>
                        <Link to="girls.html">amet</Link>
                      </li>
                      <li>
                        <Link to="shop.html">placerat</Link>
                      </li>
                      <li>
                        <Link to="shop.html">Proin </Link>
                      </li>
                      <li>
                        <Link to="index.html">vehicula</Link>
                      </li>
                      <li>
                        <Link to="shop.html">diam</Link>
                      </li>
                      <li>
                        <Link to="men.html">velit</Link>
                      </li>
                      <li>
                        <Link to="shop.html">felis</Link>
                      </li>
                      <li>
                        <Link to="women.html">mauris</Link>
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
                      <Link to="index.html">Home</Link>
                    </li>
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Shop</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact</Link>
                    </li>
                  </ul>
                  <h3 className="text-center follow">Follow Us</h3>
                  <ul className="social-iconsv2 agileinfo">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-google-plus-g" />
                      </Link>
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
                    <Link to="index.html">
                      <span>f</span>ashion
                      <span>h</span>ub</Link>
                  </h2>
                  <p>© 2018 Fashion Hub. All rights reserved | Design by
                    <Link to="http://w3layouts.com" className="text-secondary"> W3layouts.</Link>
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
                      <Link to="#" data-toggle="modal" data-target="#exampleModal1" className="text-dark login_btn">
                        Login Now</Link>
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
        {/* script for password match */} <footer>
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
                        <Link to="payment.html">Payment</Link>
                      </li>
                      <li>
                        <Link to="#">Shipping</Link>
                      </li>
                      <li>
                        <Link to="#">Cancellation &amp; Returns</Link>
                      </li>
                      <li>
                        <Link to="faq.html">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                  {/* //services */}
                  {/* latest posts */}
                  <div className="col-lg-3 col-sm-6 footer-v2grid mt-sm-0 mt-5">
                    <h4>Latest Blog</h4>
                    <div className="footer-v2grid1 row">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="blog.html">
                          <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="blog.html">eveniie arcet ut moles morbi dapiti</Link>
                      </div>
                    </div>
                    <div className="footer-v2grid1 row my-2">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="blog.html">
                          <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="blog.html">earum rerum tenmorbi dapiti et</Link>
                      </div>
                    </div>
                    <div className="footer-v2grid1 row">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="blog.html">
                          <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="blog.html">morbi dapiti eveniet ut molesti</Link>
                      </div>
                    </div>
                  </div>
                  {/* //latest posts */}
                  {/* locations */}
                  <div className="col-lg-2 col-sm-6 footer-v2grid my-lg-0 my-5">
                    <h4>office locations</h4>
                    <ul>
                      <li>
                        <Link to="#">new jersey</Link>
                      </li>
                      <li>
                        <Link to="#">texas</Link>
                      </li>
                      <li>
                        <Link to="#">michigan</Link>
                      </li>
                      <li>
                        <Link to="#">cannada</Link>
                      </li>
                      <li>
                        <Link to="#">brazil</Link>
                      </li>
                      <li>
                        <Link to="#">california</Link>
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
                      <Link to="#">
                        <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                  </div>
                  {/* //flickr posts */}
                  {/* popular tags */}
                  <div className="col-lg-2  footer-v2grid mt-sm-0 mt-5">
                    <h4>popular tags</h4>
                    <ul className="w3-tag2">
                      <li>
                        <Link to="shop.html">amet</Link>
                      </li>
                      <li>
                        <Link to="#">placerat</Link>
                      </li>
                      <li>
                        <Link to="shop.html">Proin </Link>
                      </li>
                      <li>
                        <Link to="#">vehicula</Link>
                      </li>
                      <li>
                        <Link to="shop.html">diam</Link>
                      </li>
                      <li>
                        <Link to="#">velit</Link>
                      </li>
                      <li>
                        <Link to="shop.html">felis</Link>
                      </li>
                      <li>
                        <Link to="shop.html">mauris</Link>
                      </li>
                      <li>
                        <Link to="shop.html">amet</Link>
                      </li>
                      <li>
                        <Link to="shop.html">placerat</Link>
                      </li>
                      <li>
                        <Link to="shop.html">Proin </Link>
                      </li>
                      <li>
                        <Link to="#">vehicula</Link>
                      </li>
                      <li>
                        <Link to="shop.html">diam</Link>
                      </li>
                      <li>
                        <Link to="#">velit</Link>
                      </li>
                      <li>
                        <Link to="shop.html">felis</Link>
                      </li>
                      <li>
                        <Link to="comedy.html">mauris</Link>
                      </li>
                    </ul>
                  </div>
                  {/* //popular tags */}
                  <div className="clearfix"> </div>
                </div>
              </div>
              {/* //footer-top */}
              <div className="footer-bottomv2 py-5">
                <div className="container">
                  <ul className="bottom-links-agile">
                    <li>
                      <Link to="index.html">Home</Link>
                    </li>
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link to="shop.html">Shop</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact</Link>
                    </li>
                  </ul>
                  <h3 className="text-center follow">Follow Us</h3>
                  <ul className="social-iconsv2 agileinfo">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-google-plus-g" />
                      </Link>
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
                    <Link to="index.html">
                      <span>f</span>ashion
                      <span>h</span>ub</Link>
                  </h2>
                  <p>© 2018 Fashion Hub. All rights reserved | Design by
                    <Link to="http://w3layouts.com" className="text-secondary"> W3layouts.</Link>
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
                      <Link to="#" data-toggle="modal" data-target="#exampleModal1" className="text-dark login_btn">
                        Login Now</Link>
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
        {/* cart-js */}
        {/* //cart-js */}
        {/* price range (top products) */}
        {/* //price range (top products) */}
        {/* start-smoth-scrolling */}
        {/* start-smoth-scrolling */}
        {/* here stars scrolling icon */}
        {/* //here ends scrolling icon */}
        {/* smoothscroll */}
        {/* //smoothscroll */}
            </div>
        );
    }
}
    
export default Shop