import React, { Component } from 'react';
// import { NavItem, Nav, NavDropdown, MenuItem, Navbar,Button } from 'react-bootstrap';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


import './styleIndex.css';

import './assets/theme.css';
import './assets/css/animate.min.css';
//import './assets/css/bootstrap.min.css';
import './assets/css/pe-icon-7-stroke.css';

import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         
         <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
            {/*<!-- Navigation bar logo -->*/}
            <a class="navbar-brand" href="#"> <img id="logo" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/1.png?raw=true" /> </a>
            {/*<!-- Toggle Button -->*/}
            <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span  class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mr-auto">
                    {/*<!-- หมวดหมู่สินค้า -->*/}
                    <li class="nav-item">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/2.png?raw=true" style={{height:"1.4em"}} /></a>
                    </li>
                    {/*<!-- โพสสินค้า -->*/}
                    <li class="nav-item">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/3.png?raw=true" style={{height:"1.5em"}} /></a>
                    </li>
                    {/*<!-- บทความ -->*/}
                    <li class="nav-item">
                            <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/4.png?raw=true" style={{height:"1.5em"}} /></a>
                    </li>
                    {/*<!-- ติดต่อเรา -->*/}
                    <li class="nav-item">
                            <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/5.png?raw=true" style={{height:"1.5em"}} /></a>
                    </li>
                </ul>
                {/*<!-- Search and ค้นหา button -->*/}
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">ค้นหา</button>
                </form>
               {/*<!-- Right most content -->*/}
                <ul class="navbar-nav" id="navRight">
                    <div class="row">
                        {/*{/*<!-- Eye image -->*/}
                        <li class="nav-item">
                            <img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/8.png?raw=true" />
                        </li>
                        {/*{/*<!-- heart image -->*/}
                        <li class="nav-item">
                            <img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/9.png?raw=true" />
                        </li>
                       {/* {/*<!-- person image -->*/}
                        <li class="nav-item">
                            <img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/10.png?raw=true" />
                        </li>
                    </div>
                </ul>
            </div>
        </nav>



        </header>

        <div id="slideshow" class="carousel slide" data-ride="carousel">
        {/*{/*<!-- 3 indicator bar -->*/}
        <ol class="carousel-indicators">
          <li data-target="#slideshow" data-slide-to="0" class="active"></li>
          <li data-target="#slideshow" data-slide-to="1"></li>
          <li data-target="#slideshow" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
            {/*<!-- dummy image -->*/}
            <div class="carousel-item active">
                <img class="d-block w-100" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/11.png?raw=true" alt="First slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/11.png?raw=true" alt="Second slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/header/11.png?raw=true" alt="Third slide" />
            </div>
        </div>

        {/*<!-- Left Button -->*/}
        <a class="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        {/*<!-- Right Button -->*/}
        <a class="carousel-control-next" href="#slideshow" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        </div>







    {/*<!-- Top ten -->*/}
    <br />
    <nav class="navbar navbar-expand-xl navbar-expand-lg navbar-expand-md">
        {/*<!-- ท็อป 10 ร้านค้า image -->*/}
        <a class="navbar-brand" href="#"> <img id="top10logo" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/1.png?raw=true" /> </a>
        {/*<!-- Toggle button -->*/}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#top10" aria-controls="top10" aria-expanded="false" aria-label="Toggle navigation">
            <span><img id="toggleIcon" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB+.png?raw=true"/></span>
        </button>
        {/*<!-- List -->*/}
        <div class="collapse navbar-collapse" id="top10">
            <ul class="navbar-nav mr-auto">
                <div class="row">
                    {/*<!-- เครื่องสำอาง -->*/}
                    <div class="col">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB1.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div>
                    {/*<!-- เครื่องประดับ -->*/}
                    <div class="col">
                        <a class="nav-link" href="#"><img id=""src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB2.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div>
                    {/*<!-- อาหารเสริม hide when the screen is large or xl -->*/}
                    <div class="col d-xl-none d-lg-none">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB12.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div>
                </div>
                <div class="row">
                    {/*<!-- รองเท้า -->*/}
                    <div class="col">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB3.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div>
                    {/*<!-- electronic -->*/}
                    <div class="col">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB4.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div>
                    {/*<!-- แม่และเด็ก hide when the screen is large or xl -->*/}
                    <div class="col d-xl-none d-lg-none">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB13.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div>
                </div>
                <div class="row">
                    {/*<!-- เสื้อผ้า -->*/}
                    <div class="col">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB6.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div>
                    {/*<!-- กระเป๋า -->*/}
                    <div class="col">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB10.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div> 
                    {/*<!-- ประดับยนต์ hide when the screen is large or xl-->*/}
                    <div class="col d-xl-none d-lg-none">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB11.png?raw=true" style={{height:"1.7em"}}/></a>
                    </div>
                </div>
                <div class="row">
                    {/*<!-- บำรุงผิว -->*/}
                    <div class="col">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB8.png?raw=true" style={{height:"1.5em"}}/></a>
                    </div>
                    {/*<!-- อาหารและเครื่องดื่ม -->*/}
                    <div class="col">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB7.png?raw=true" style={{height:"1.5em"}}/></a>
                    </div>
                    {/*<!-- เสริมความงาม hide when screen is large or xl-->*/}
                    <div class="col d-xl-none d-lg-none">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB9.png?raw=true" style={{height:"1.5em"}}/></a>
                    </div> 
                </div>
                <div class="row">
                    {/*<!-- อาหารเสริม display only for large screen -->*/}
                    <div class="col d-none d-lg-block" style={{"margin-top":"0.01em"}}>
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB12.png?raw=true" style={{height:"1.5em"}}/></a>

                    </div>
                    {/*<!-- ประดับยนต์ display only for large screen -->*/}
                    <div class="col d-none d-lg-block">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB11.png?raw=true" style={{height:"1.5em"}}/></a>
                    </div>
                </div>
                <div class="row" >
                    {/*<!-- เสริมความงาม display only for large screen -->*/}  
                    <div class="col d-none d-lg-block">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB9.png?raw=true" style={{height:"1.5em"}}/></a>
                    </div>
                    {/*<!-- แม่และเด็ก display only for large screen -->*/}
                    <div class="col d-none d-lg-block">
                        <a class="nav-link" href="#"><img src="https://github.com/bkioshn/bkioshn.github.io/blob/master/other/CB13.png?raw=true" style={{height:"1.5em"}}/></a>
                    </div>
                </div>
            </ul>   
        </div> 
    </nav>
    
    {/*<!-- Top 10 Shop Carousel Image -->*/}
    <br />
    <div id="top10Content" class="carousel slide carousel-multi-item" data-ride="carousel">
        <div class="carousel-inner mdb-lightbox" role="listbox">
            <div id="mdb-lightbox-ui"></div>
            {/*<!-- First slide (Trying different size of images) -->*/}
            <div class=" carousel-item active text-center">
                <figure class="col-md-2 col-md-offset-1 d-md-inline-block col-sm-5 d-sm-inline-block col-xs-4 d-xs-inline-block">
                    <div class="card">
                        <img class="card-img-top img-fluid hidden-xs" src="data:image/jpeg;base64,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"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 1 </p>
                        <ul class="list-inline"> 
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>
                </figure>
                <figure class="col-md-2 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrHrHw9dFfMpN2mDYXWxm-prGNTe4viNf_r5C9RJuCc5tanq_uQ"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 2 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>
                </figure>
                <figure class="col-md-2 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class="card-img-top" src="data:image/jpeg;base64,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"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 3 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>
                </figure>
                <figure class="col-md-2 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class="card-img-top" src="data:image/jpeg;base64,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"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 4 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>             
                </figure>
                <figure class="col-md-2 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class="card-img-top" src="data:image/jpeg;base64,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"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 5 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>              
                </figure>
            </div>
        {/*<!-- Second slide -->*/}
            <div class="carousel-item text-center">
                <figure class="col-md-2 col-md-offset-1 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class="card-img-top" src="https://media.fjallraven.com/detail/7323450013738_FW18_a_kanken_fjaellraeven_21.jpg"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 6 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>
                </figure>
                <figure class="col-md-2 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class="card-img-top" src="https://media.fjallraven.com/detail/7323450013738_FW18_a_kanken_fjaellraeven_21.jpg"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 7 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>
                </figure>
                <figure class="col-md-2 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class="card-img-top" src="https://media.fjallraven.com/detail/7323450013738_FW18_a_kanken_fjaellraeven_21.jpg"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 8 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>
                </figure>
                <figure class="col-md-2 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class="card-img-top" src="https://media.fjallraven.com/detail/7323450013738_FW18_a_kanken_fjaellraeven_21.jpg"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 9 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>
                </figure>
                <figure class="col-md-2 d-md-inline-block col-sm-5 d-sm-inline-block">
                    <div class="card">
                        <img class= "card-img-top" src="https://media.fjallraven.com/detail/7323450013738_FW18_a_kanken_fjaellraeven_21.jpg"
                            alt="Card image cap"/>
                        <p class="textImage"> ShopName 10 </p>
                        <ul class="list-inline">  
                            <i class ="icon" data-feather="thumbs-up"></i>
                            <i class = "icon" data-feather="heart"></i>
                            <i class = "icon" data-feather="message-circle"></i>
                            <i class = "icon" data-feather="eye"></i>
                        </ul>
                    </div>
                </figure>
            </div>
        </div>
        {/*<!-- Left Button -->*/}
        <a class="carousel-control-prev" href="#top10Content" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        {/*<!-- Right Button -->*/}
        <a class="carousel-control-next" href="#top10Content" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>  
    </div>

    {/*<!-- Shop -->*/}
    <div class="container" id="shopping">
        <h1 id="shop"> Shop </h1>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                <div class="card card-cascade">
                    <div class="view view-cascade overlay">
                        <img class="card-img-top" src="https://m.media-amazon.com/images/G/01/2018/drmarten/DrMartenWomensTC._CB470107817_.jpg"/>
                    </div>
                    <div class="card-body card-body-cascade text-center">
                        <h6>Shop 1</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, harum.</p>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-3">
                                    <i data-feather="thumbs-up"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="heart"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="message-circle"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="eye"></i>
                                </div>
                            </div>
                        </div>                 
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                <div class="card card-cascade wider">
                    <div class="view view-cascade overlay">
                        <img class="card-img-top" src="https://m.media-amazon.com/images/G/01/2018/drmarten/DrMartenWomensTC._CB470107817_.jpg"/>
                    </div>
                    <div class="card-body card-body-cascade text-center">
                        <h6>Shop 2</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, harum.</p>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-3">
                                    <i data-feather="thumbs-up"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="heart"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="message-circle"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                <div class="card card-cascade wider">
                    <div class="view view-cascade overlay">
                        <img class="card-img-top" src="https://m.media-amazon.com/images/G/01/2018/drmarten/DrMartenWomensTC._CB470107817_.jpg"/>
                    </div>
                    <div class="card-body card-body-cascade text-center">
                        <h6>Shop 3</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, harum.</p>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-3">
                                    <i data-feather="thumbs-up"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="heart"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="message-circle"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                <div class="card card-cascade wider">
                    <div class="view view-cascade overlay">
                        <img class="card-img-top" src="https://m.media-amazon.com/images/G/01/2018/drmarten/DrMartenWomensTC._CB470107817_.jpg"/>
                    </div>
                    <div class="card-body card-body-cascade text-center">
                        <h6>Shop 4</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, harum.</p>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-3">
                                    <i data-feather="thumbs-up"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="heart"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="message-circle"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                <div class="card card-cascade wider">
                    <div class="view view-cascade overlay">
                        <img class="card-img-top" src="https://m.media-amazon.com/images/G/01/2018/drmarten/DrMartenWomensTC._CB470107817_.jpg"/>
                    </div>
                    <div class="card-body card-body-cascade text-center">
                        <h6>Shop 5</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, harum.</p>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-3">
                                    <i data-feather="thumbs-up"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="heart"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="message-circle"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 mb-3">
                <div class="card card-cascade wider">
                    <div class="view view-cascade overlay">
                        <img class="card-img-top" src="https://m.media-amazon.com/images/G/01/2018/drmarten/DrMartenWomensTC._CB470107817_.jpg"/>
                    </div>
                    <div class="card-body card-body-cascade text-center">
                        <h6>Shop 6</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, harum.</p>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-3">
                                    <i data-feather="thumbs-up"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="heart"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="message-circle"></i>
                                </div>
                                <div class="col-3">
                                        <i data-feather="eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*<!-- Category -->*/}
    <div class="container" id="category">   
        <h1> Category </h1>
        <div class="row">
            {/*<!-- Computer Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/263/263082.svg"/> </a>
            </div>
            {/*<!-- Dress Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/1161/1161706.svg"/> </a>
            </div>
            {/*<!-- Toothpaste Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/1190/1190674.svg"/> </a>
            </div>
            {/*<!-- High heel Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/1161/1161711.svg"/> </a>
            </div>
            {/*<!-- Men Dress Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/1242/1242991.svg"/></a>
            </div>

            {/*<!-- Divider -->*/}
            <div class="w-100"></div>
            
            {/*<!-- Rugby Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/1147/1147680.svg"/></a>
            </div>
            {/*<!-- Wheel Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/938/938716.svg"/></a>
            </div>
            {/*<!-- Sneaker Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/502/502662.svg"/></a>
            </div>
            {/*<!-- Cosmetic Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/588/588509.svg" /></a>
            </div>
            {/*<!-- Baby Icon -->*/}
            <div class="col">
                <a href="#"><img src="https://image.flaticon.com/icons/svg/772/772093.svg" /></a>
            </div>
        </div>
    </div>

    {/*<!-- Article -->*/}
    <br />
    <div class="container" id="article">
        <h1> Article </h1>
        <div class="row"> 
            {/*<!-- Article 1 -->*/}  
            <div class="col-xl-2 col-lg-3 col-sm-12  coll">
                <img src="https://cdn.lynda.com/course/175129/175129-636271814847362281-16x9.jpg"/>
            </div>
            <div class="col-xl-10 col-lg-9 coll">
                <p class="infoAr">Lorem ipsum dolor sitamet consectetur adipisicing elit. 
                    Quis reprehenderit quaerat fugiat porro dicta. Asperiores aperiam esse dolorem mollitia officia!</p>
            </div>
            {/*<!-- Article 2 -->*/}
            <div class="col-xl-2 col-lg-3 coll">
                <img  src="https://cdn.lynda.com/course/175129/175129-636271814847362281-16x9.jpg" />
            </div>
            <div class="col-xl-10 col-lg-9 coll">
                <p class="infoAr">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quis reprehenderit quaerat fugiat porro dicta. Asperiores aperiam esse dolorem mollitia officia!</p>
            </div>
            {/*<!-- Article 3 -->*/}
            <div class="col-xl-2 col-lg-3 coll">
                <img  src="https://cdn.lynda.com/course/175129/175129-636271814847362281-16x9.jpg"/>
            </div>
            <div class="col-xl-10 col-lg-9 coll">
                <p class="infoAr">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quis reprehenderit quaerat fugiat porro dicta. Asperiores aperiam esse dolorem mollitia officia!</p>
            </div>
        </div>
    </div>

    {/*<!-- Footer -->*/}
    <footer class="page-footer font-small blue pt-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-auto">
                    <p>© 2018 Copyright</p>
                </div>
            </div>
        </div>            
    </footer>







      </div>
    );
  }
}

export default App;
