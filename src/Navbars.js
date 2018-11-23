import React, { Component } from 'react';
import './App.css';


class NavbarHeader extends Component {
  render() {
    return (
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Insert Logo</a>
      </div>
    );
  }
}


class NavbarLink extends Component {
  render() {
    return (
      <li>
        <a href="#">something</a>
      </li>
    );
  }
}


class NavbarSearch extends Component {
  render() {
    return (
      <form class="navbar-form navbar-right" role="search">
        <div class="form-group input-group">
          <input type="text" class="form-control" placeholder="Search.." />
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </form>
    );
  }
}


class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <NavbarHeader />
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <NavbarLink />
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <NavbarLink />
              </ul>
              <NavbarSearch />
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Likely an Account</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


// class x extends Component {
//   render() {
//     return ();}}


export {Navbar, NavbarSearch, NavbarLink, NavbarHeader};