import React from "react";
import { Grid, Text, Image } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  const { post_id } = props;
  console.log();

  React.useEffect(() => {
    if (!comment_list[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  if (!comment_list[post_id] || !post_id) {
    return null;
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        {comment_list[post_id].map((c) => {
          return <CommentItem key={c.id} {...c} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  post_id: null,
};

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, insert_dt, contents } =
    props;
  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle" border="2px solid pink" />
        <Text>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0px 0px 0px 15px">
        <Text>{contents}</Text>
        <Text>{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};
//commentList가 어차피 export해줘서 안해도 된다.

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "yoonji",
  user_id: "",
  post_id: 1,
  contents: "이불밖은 위험해!",
  insert_dt: "2022-04-04 21:00:00",
};
