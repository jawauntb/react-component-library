import React, { Component } from 'react';
import './App.css';
import {Searchbar} from "./Searchbars.js"



class Adbar extends Component {
    render() {
      return(
          <div class="col-sm-2 well">
            <div class="thumbnail">
              <p>Upcoming Events:</p>
              <img src="" alt="Paris" width="400" height="300"/>
              <p><strong>Paris</strong></p>
              <p>Fri. 27 November 2015</p>
              <button class="btn btn-primary">Info</button>
            </div>      
            <div class="well">
              <p>ADS</p>
            </div>
            <div class="well">
              <p>ADS</p>
            </div>
          </div>
      );
    }
  }


  class Extrasbar extends Component {
    render() {
      return (
        <div class="col-sm-3 well">
          <div class="well">
            <p><a href="#">My Profile</a></p>
            <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar" />
          </div>
          <TagsBox />
          <div class="alert alert-success fade in">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
            <p><strong>Check It Out!</strong></p>
              People seem to bang with you pretty heavy
            </div>
          <p><a href="#">Link</a></p>
          <p><a href="#">Link</a></p>
          <Searchbar />
        </div>
      );
    }
  }
  

  class TagsBox extends Component {
    render() {
      return(
        <div class="row-sm-1 well">
          <p><a href="#">Tags</a></p>
            <p>
              <div class="row">
                <span class="label label-default">News</span>
                <span class="label label-primary">Jawaun</span>
              </div>
              <div class="row">  
                <span class="label label-success">Labels</span>
                <span class="label label-info">Is Tight</span>
                <span class="label label-warning">Gaming</span>
              </div>
              <div class="row">
                <span class="label label-danger">He don't got no</span>
                <span class="label label-success">Friends</span>
              </div>
            </p>
        </div>
      );
    }
  }


  class SideNavItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: ""
      }
    }
  
    handleClick(){
      this.state.active="active";
    }
  
    render() {
      return (
        <li class={this.state.active}>
          <a href="#section1">Home</a>
          {this.handleClick()}
        </li>
      );
    }
  }
  
  
  class SideNav extends Component {
    render() {
      return (
        <div class="col-sm-3 sidenav">
          <h4>SideNav Stuff</h4>
          <ul class="nav nav-pills nav-stacked">
            <li class="active"><a href="#section1">Home</a></li>
            <li><a href="#section2">Friends</a></li>
            <SideNavItem />
            <SideNavItem />
          </ul><br />
          <Searchbar />
        </div>
      );
    }
  }


// class x extends Component {
//   render() {
//     return ();}}


  export {Adbar, Extrasbar, TagsBox, SideNav, SideNavItem};