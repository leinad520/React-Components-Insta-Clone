/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import LikeSection from "./components/PostsContainer/LikeSection";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from "./components/PostsContainer/PostsPage";


const App = () => {

  return (
    <div className="App">
      <PostsPage />
    </div>
  );
};

export default App;
