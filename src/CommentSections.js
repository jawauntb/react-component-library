import React, { Component } from 'react';
import './App.css';

class LeaveComment extends Component {
  render() {
    return (
      <div>
        <hr />
        <h4>Leave a Comment:</h4>
        <form role="form">
          <div class="form-group">
            <textarea class="form-control" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
        <br /><br />
      </div>
    );
  }
}


class CommentImage extends Component {
  render() {
    return (
      <div class="col-sm-2 text-center">
        <img src="bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar" />
      </div>
    );
  }
}

                
class CommentText extends Component {
  render() {
    return (
      <div>
        <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
        <p>Me too! WOW! Keep up the GREAT work!</p>
        <br />
      </div>
    );
  }
}


class MainComment extends Component {
  render() {
    return (
      <div>
        <CommentImage />
        <div class="col-sm-10">
          <CommentText />
        </div>
      </div>
    );
  }
}

                          
class ResponseComment extends Component {
  render() {
    return (
      <div class="row">
        <CommentImage />
        <div class="col-xs-10">
          <CommentText/>
        </div>
      </div>
    );
  }
}


class CommentSectionStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }
  }

  render() {
    return (
      <div>
        <p><span class="badge">{this.state.number}</span> Comment:</p><br/>
        <div class="row"/>
      </div>
    );
  }
}


class CommentSection extends Component {
  render() {
    return (
      <div class="col-sm-9">
        <LeaveComment/>
        <CommentSectionStart />
        <MainComment />
        <MainComment />
        <CommentSectionStart/>
        <ResponseComment />
        <ResponseComment />
        <CommentSectionStart />
        <ResponseComment />
      </div>
    );
  }
}

export {LeaveComment, CommentImage, CommentText, MainComment, ResponseComment, CommentSectionStart, CommentSection};