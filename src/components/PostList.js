import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    //for store posts list make state
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  //this exicute only one time and only render when component lifecycle
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retriving data" });
      });
  }

  render() {
    //MAP : function map every filed key in array without for loop and map data
    //PUSH: push only push one data but if you want you need to use for loop.
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>Post List</h1>
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
