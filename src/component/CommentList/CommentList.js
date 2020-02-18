import React from 'react';
import './CommentList.css';
import {Comment} from '../';

const CommentList = ({comments}) => {
  let commentList = null;
  if(comments !== undefined) {
    commentList = comments.map(
      (comment, index) => {
        return (
          <Comment
            name={comment.email.split('@')[0]}
            body={comment.body}
            key={index}
          />
        )
      }
    );
  }

  return (
    <ul className="CommentList">
      {commentList}
    </ul>
  );
}

export default CommentList;
