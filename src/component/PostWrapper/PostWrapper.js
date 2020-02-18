import React from 'react';
import './PostWrapper.css';

// 함수의 파라미터로 : children
// 클래스형태로 할 때의 this.props.children 과 동일
const PostWrapper = ({children}) => {
  return (
    <div className="PostWrapper">
      {children}
    </div>
  );
};

export default PostWrapper;
