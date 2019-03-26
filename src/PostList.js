import React from 'react'

import Posts from './Posts'

const postList = (props) =>{
    let postList;
    if (props.response != null) {
      postList = props.response.data.map((post, index) => {
        return <Posts key={index} title={post.title} body={post.body}/>
      });
    }
    else {
        postList= <h1>No screams yet..!</h1>
    }
    return postList;
}
export default postList;