import React, { Component } from 'react'

import Posts from './Posts'

class postList extends Component {


  render() {

    let postList;
    if (this.props.response != null) {
      postList = this.props.response.map((post, index) => {
        return <Posts delete={this.props.delete} key={post.id} index={post.id} title={post.title} body={post.body} />
      });
    }
    else {
      postList = <h1>No screams yet..!</h1>
    }
    return postList;
  }
}



export default postList;