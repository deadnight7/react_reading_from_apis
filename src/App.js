import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import Posts from './Posts'
import PostList from './PostList'

class App extends Component {

  state = {
    response: null
  }

  componentDidMount() {
    let currentComponent = this;
    // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        console.log(response);
        currentComponent.setState({ response : response });
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
          <h1 align="center">
            Screams...!
        </h1>


        <PostList response={this.state.response}/>

        </div>
      </div>
    );
  }
}

export default App;
