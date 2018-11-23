import React, { Component } from 'react';
import './App.css';


class Gallery extends Component {
    render() {
      return (
        <div class="col-sm-7">    
          <div class="container-fluid bg-3 text-center">    
            <h3>Doesn't matter what I say here either</h3><br/>
            <GalleryRow/>
            <GalleryRow/>
            <GalleryRow/>
            <br></br>
          </div>
        </div>  
      );
    }
  }
  
  
  class GalleryRow extends Component {
    render() {
      return(          
      <div class="row">
        <br></br>
        <GalleryItem/>
        <GalleryItem/>
        <GalleryItem/>
        <GalleryItem/>
        <br></br>      
      </div>
      );
    }
  }


class GalleryItem extends Component {
    render() {
        return (
            <div class="col-sm-3">
                <p>text..</p>
                <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" alt="Image" />
            </div>
        );
    }
}  


// class x extends Component {
//   render() {
//     return ();}}


export {Gallery, GalleryRow, GalleryItem};