import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import Posts from './Posts'
import PostList from './PostList'

class App extends Component {

  state = {
    response: null
  }


  delete = (key) => {

    //Delete from state having that key
    let responsePosts = this.state.response;
    console.log(responsePosts);

    // eslint-disable-next-line 
    responsePosts = responsePosts.filter((post)=>{
      if (post.id !== key){
        //Do not add in modified array
        return post;
      }
    });
    this.setState({response: responsePosts});

    
    //this.setState({response :  responseModified});
  }
  componentDidMount() {
    
    // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( (response) => {
        // handle success
        console.log(response);    
        this.setState({ response : response.data });
        ///console.log(response.data);
       // this.setState({ posts: response.data });
      })
      // .catch(function (error) {
      //   // handle error
      //   console.log("unablea");
      //   console.log(error);
      //   // this.setState({ posts: [] });
       
      // })
      // .then(function () {
      //   // always executed
      // });

  }

  render() {
    console.log("Render..!");
   
    return (
      <div className="container">
        <div className="row">
          <h1 align="center" onClick={this.delete}>
            Screams...!
        </h1>

        <PostList delete={this.delete} response={this.state.response}/>

        </div>
      </div>
    );
  }
   
}

export default App;
