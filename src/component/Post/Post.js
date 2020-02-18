import React, {Component} from 'react';
import './Post.css';
import { CommentList } from '../';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postInfo : {
        title : null,
        body : null,
        comments : []
      },
      animate : false,
      direction : 'left'
    };
  }

  componentWillReceiveProps(nextProps) {
    const { title, body, comments } = nextProps;

    if(this.props.postId !== nextProps.postId) {
      const direction = this.props.postId < nextProps.postId ? 'left' : 'right';

      this.setState({
        direction,
        animate : true
      });


      setTimeout(
        () => {
          this.setState({
            postInfo : {
              title, body, comments
            },
            animate : false
          });
        }, 500
      );

      return;
    }

    this.setState({
      postInfo : {
        title, body, comments
      }
    });
  }

  render() {
    // 주의!!!
    // this.state.postInfo 사용! 여기서 this.props 사용하면 다음내용이 미리나옴!! (아래는 설명!)
    // 포스트가 다음 혹은 이전으로 넘어갈 때, 애니메이션을 제대로 주기 위해서는 props 를 그대로 렌더링하면 안됨.
    // 그 대신에, props 를 전달 받을 때 마다, state 와 동기화를 시키고, state 에 있는 값을 렌더링해줍니다.
    // 이렇게 함으로서, 포스트가 페이지에서 사라지는 효과를 줄 때, 이전 포스트의 내용을 그대로 보여줄 수 있게 됩니다.
    // 만약에 props 를 그대로 렌더링 한다면, 포스트가 사라지는데, 새로운 데이터를 보여주면서 사라지겠죠.
    const { title, body, comments } = this.state.postInfo;
    const { animate, direction } = this.state;
    const animationType = animate
                          ? (direction==='left' ? 'slideOutLeft' : 'slideOutRight')
                          : (direction==='left' ? 'slideInRight' : 'slideInLeft');

    if(title===null) return null;
    return (
      <div className={`Post animated ${animationType}`}>
        <h1>{title}</h1>
        <p>
          {body}
        </p>
        <CommentList comments={comments}/>
      </div>
    );
  }
}

export default Post;
