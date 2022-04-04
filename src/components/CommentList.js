import React from "react";
import { Grid, Text, Image } from "../elements";

const CommentList = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, insert_dt, contents } =
    props;
  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle" />
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
