import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

import Post from "../components/Post";
import Permit from "../shared/Permit";

import { Button, Grid } from "../elements";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);

  React.useEffect(() => {
    if (post_list.length < 2) {
      //getOnePostFB로 호출해서 이미 한개가 존재하니까
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid>
        {post_list.map((v, i) => {
          if (v.user_info.user_id === user_info?.uid) {
            return (
              <Grid
                bg="#ffffff"
                key={(v, i)}
                _onClick={() => {
                  history.push(`/post/${v.id}`);
                }}
              >
                <Post {...v} is_me />
              </Grid>
            );
          } else {
            return (
              <Grid
                bg="#ffffff"
                key={(v, i)}
                _onClick={() => {
                  history.push(`/post/${v.id}`);
                }}
              >
                <Post {...v} />
              </Grid>
            );
          }
        })}
        <Permit>
          <Button
            is_float
            text="+"
            _onClick={() => {
              history.push("/write");
            }}
          ></Button>
        </Permit>
      </Grid>
    </React.Fragment>
  );
};
export default PostList;
