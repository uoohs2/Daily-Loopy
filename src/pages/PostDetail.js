import React from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

import Permit from "../shared/Permit";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as poastActions } from "../redux/modules/post";

const PostDetail = (props) => {
  const id = props.match.params.id;

  const user_info = useSelector((state) => state.user.user);

  const post_list = useSelector((store) => store.post.list);
  const post_index = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_index];

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (post) {
      return;
    }
    dispatch(poastActions.get0nePostFB(id));
  }, []);
  return (
    <React.Fragment>
      {post && (
        <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
      )}
      <Permit>
        <CommentWrite post_id={id} />
      </Permit>
      <CommentList post_id={id} />
    </React.Fragment>
  );
};

export default PostDetail;
