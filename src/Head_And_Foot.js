import React, { Component } from 'react';


class SiteHeader extends Component {
    render() {
      return (
        <div>
          <div class="jumbotron"><br/>
            <div class="container text-center">
              <h1>Site Template</h1>      
              <p>Fill it in yourself you lazy *^Y@</p>
            </div>
          </div>
        </div>
        );
    }
  }


class Footer extends Component {
    render() {
      return (
        <div>
          <footer class="container-fluid text-center">
            <div><br></br>
              <p>Look at the foot on this thing, huh?</p>
            </div>
          </footer>
        </div>
      );
    }
  }


export {SiteHeader, Footer};