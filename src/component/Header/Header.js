import React from 'react';
import './Header.css';

// 함수형 컴포넌트
// state가 없고, life cycle 메소드가 필요없는 멍청한 컴포넌트의 경우
// 함수형 컴포넌트로 선언하는 것이 좋은 패턴!
// this에 접근 불가, 오직 전달받은 props에만 의존
const Header = () => (
  <div className="Header">
    POSTS
  </div>
)

export default Header;
