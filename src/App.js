import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LeaveComment, CommentImage, CommentText, MainComment, ResponseComment, CommentSectionStart, CommentSection} from "./CommentSections.js";
import {Navbar, NavbarSearch, NavbarLink, NavbarHeader} from "./Navbars.js";
import {Adbar, Extrasbar, TagsBox, SideNav, SideNavItem} from "./Sidebars.js";
import {Gallery, GalleryRow, GalleryItem} from "./Galleries.js";
import {BlogPost, BigHeadingParagraph, MedHeadingParagraph, SectionedText, SmallHeadingParagraph} from "./TextSections.js";
import {SiteHeader, Footer} from "./Head_And_Foot.js"
import {Searchbar} from "./Searchbars.js"
 

class ProfileCenter extends Component {
  render() {
    return(
      <div class="col-sm-7">
          <div class="row">
            <div class="col-sm-12">
              <div class="panel panel-default text-left">
                <div class="panel-body">
                  <p contenteditable="true">Status: Well its 3am how do you feel???</p>
                  <button type="button" class="btn btn-default btn-sm">
                    <span class="glyphicon glyphicon-thumbs-up"></span> Like
                  </button>     
                </div>
              </div>
            </div>
          </div>
          <BigHeadingParagraph/>
          <Tweetbox/>
          <GalleryRow/>
          <BlogPost/>
        </div>
    );
  }
}


class Tweetbox extends Component {
  render() {
    return(
      <div class="row">
        <div class="col-sm-3">
          <div class="well">
            <p>Bro No 1</p>
            <img src="bird.jpg" class="img-circle" height="55" width="55" alt="Avatar" />
          </div>
        </div>
        <div class="col-sm-9">
          <div class="well">
            <p>Don't nobody really care what you have to say, Nah mean?</p>
          </div>
        </div>
      </div>
    );
  }
}


class MainContainer extends Component {
  render() {
    return (     
      <div class="container text-center">
      <SiteHeader/>
        <div class="row">
            <div><Extrasbar/></div>
            <div><ProfileCenter/></div>
            <div><Adbar/></div>    
            <CommentSection/>
        </div>
      </div>
    );
  }
}   


// class x extends Component {
//   render() {
//     return ();}}
                 
                                                                                                         
export {Navbar, SiteHeader, Extrasbar, TagsBox, Gallery, Adbar, MainContainer, Footer};
