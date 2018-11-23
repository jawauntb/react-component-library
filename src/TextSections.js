import React, { Component } from 'react';

class BigHeadingParagraph extends Component {
    render() {
      return (
        <div class="container-fluid text-center">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <hr />
        </div>    
      );
    }
  }
  
  
  class MedHeadingParagraph extends Component {
    render() {
      return ( 
        <div class="container-fluid text-center">
          <h3>Test</h3>
          <p>Lorem ipsum...</p>
          <hr />
        </div>
      );
    }
  }
  
  
  class SmallHeadingParagraph extends Component {
    render() {
      return ( 
        <div class="container-fluid text-center">
          <h5>Test</h5>
          <p>Lorem ipsum...</p>
          <hr />
        </div>
      );
    }
  }
        

  class SectionedText extends Component {
    render() {
      return (
        <div>
          <div class="container-fluid text-center">
            <div class="row content">
              <div class="col-sm-8 text-left">
                <BigHeadingParagraph />
                <MedHeadingParagraph />
                <SmallHeadingParagraph />
                <BigHeadingParagraph />
                <MedHeadingParagraph />
                <SmallHeadingParagraph />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }


class BlogPost extends Component {
    render() {
      return (
        <div class="col-sm-9">
          <h4><small>RECENT POSTS</small></h4>
          <hr />
          <h2>Blog Post Title</h2>
          <h5><span class="glyphicon glyphicon-time"></span> Post by DummyPost, Sep 27, 2015.</h5>
          <h5><span class="label label-danger">Blue</span> <span class="label label-primary">Bleh</span></h5><br />
          <p>Lorem ipsum dolor sit amet</p>
          <br /><br /><hr />
        </div>
      );
    }
  }


// class x extends Component {
//   render() {
//     return ();}}


  export {BlogPost, BigHeadingParagraph, MedHeadingParagraph, SectionedText, SmallHeadingParagraph};