//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";

const PostsPage = (props) => {
  // set up state for your data
  const [data, setData] = useState(dummyData);

  
  /* map through data here to return a Post and pass data as props to Post */
  return (
    <div className="posts-container-wrapper">
      {/* {data.map(obj => <Post post={obj} />)} */}
      {data.filter(obj => {
        if (props.searchState === null) return obj;
        else if (obj.username.includes(props.searchState)) return obj;
      }).map(obj => <Post post={obj} />)}
    </div>
  );
};

export default PostsPage;
