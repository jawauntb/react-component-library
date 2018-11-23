import React, { Component } from 'react';


// class x extends Component {
//   render() {
//     return ();}}

class Searchbar extends Component {
  render() {
    return (
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Blog.." />
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    );
  }
}

export {Searchbar};