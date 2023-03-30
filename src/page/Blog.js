import { Component } from "react";


class Blog extends Component{
    render() {
        return (
            <div>
        <title>Fashion Hub Ecommerce Category Bootstrap Responsive Website Template| Blog :: w3layouts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="Fashion Hub Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
	SmartPhone Compatible web template, free WebDesigns for Nokia, Samsung, LG, Sony Ericsson, Motorola web design" />
        {/* Custom Theme files */}
        <link href="css/bootstrap.css" type="text/css" rel="stylesheet" media="all" />
        {/* shop css */}
        <link href="css/shop.css" type="text/css" rel="stylesheet" media="all" />
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
                    <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="blog.html">Blog</a>
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
        {/* breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Blog</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}
        <section className="blog_wthree py-5">
          <div className="container">
            <h5 className="head_agileinfo text-center text-capitalize pb-5">
              <span>B</span>log</h5>
            {/* blog row */}
            <div className="row card-columns py-lg-5">
              <div className="col-md-4 p-0">
                <div className="card">
                  <a href="single.html">
                    <img className="card-img-top" src="images/blg1.jpg" alt="Card image cap" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                  </div>
                </div>
                <div className="card">
                  <a href="single.html">
                    <img className="card-img-top" src="images/a2.jpg" alt="Card image cap" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">Donec sollicitudin molestie malesuada. Proin eget tortor risus..
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div className="card text-white text-center">
                  <a href="single.html">
                    <img className="card-img" src="images/a3.jpg" alt="Card image" />
                  </a>
                  <div className="card text-center p-3">
                    <blockquote className="blockquote mb-0">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                      <footer className="blockquote-footer">
                        <small>
                          Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">TDonec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                      ac diam sit.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="card">
                  <a href="single.html">
                    <img className="card-img" src="images/blg2.jpg" alt="Card image" />
                  </a>
                </div>
                <div className="card p-3 text-right">
                  <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <a href="single.html">
                    <img className="card-img-top" src="images/i10.jpg" alt="Card image cap" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //blog row */}
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
    
export default Blog