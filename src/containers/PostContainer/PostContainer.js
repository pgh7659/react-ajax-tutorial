import React, {Component} from 'react';
import { PostWrapper, Navigate, Post } from '../../component';
import * as service from '../../service/post';

class PostContainer extends Component {
  fetchPostInfo = async (postId) => {
    // 두번의 비동기 요청을 차례로 하므로 비효율적
    // const post = await service.getPost(postId);
    // console.log(post);
    // const comments = await service.getComments(postId);
    // console.log(comments);

    // 이렇게 수정 : Promise 를 한꺼번에 처리하고 기다릴 때는, Promise.all 을 사용
    // 결과값으로 이뤄진 배열을 반환
    // 결과값의 순서는 Promise.all 에 전달한 배열의 순서와 동일
    const info = await Promise.all([
      service.getPost(postId),
      service.getComments(postId)
    ]);

    console.log(info);
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  render() {
    return (
      <PostWrapper>
        <Navigate/>
        <Post />
      </PostWrapper>
    );
  }
}

export default PostContainer;
