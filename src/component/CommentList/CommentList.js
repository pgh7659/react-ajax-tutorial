import React from 'react';
import './CommentList.css';
import {Comment} from '../';

const CommentList = () => {
  return (
    <ul className="CommentList">
      <Comment />
    </ul>
  );
}

export default CommentList;
