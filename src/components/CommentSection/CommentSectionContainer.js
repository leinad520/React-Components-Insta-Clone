// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment, alterComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.comments.push({
      username: 'DanKim520',
      text: comment
    });
  }
  
  const changeComment = (e) => {
    alterComment(e.target.value);
  }




  return (
    <div>
      {props.comments.map(obj => <Comment comment={obj} />)}
      <CommentInput submitComment={handleSubmit} changeComment={changeComment} comment={comment} />
    </div>
  );
};

export default CommentSection;
