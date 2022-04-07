import React from "react";
import { Grid, Image, Text, Button } from "../elements";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";

const Post = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid margin="0px 0px 40px 0px" border="1px dotted #b5b2b4">
        <Grid is_flex margin="10px 0px 0px 0px">
          <Grid is_flex width="auto">
            <Image shape="circle" border="2px solid pink" src_01={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            {props.is_me && (
              <Button
                padding="8px"
                width="auto"
                margin="0px 3px"
                _onClick={(e) => {
                  e.stopPropagation();
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
            {props.is_me && (
              <Button
                padding="8px"
                width="auto"
                margin="0px 3px"
                _onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm("게시물을 삭제하시겠어요?") === true) {
                    console.log("네");
                    dispatch(postActions.deletePostFB(props.id));
                  }
                }}
              >
                삭제
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px" is_flex width="auto">
          <Text>{props.contents}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src_02={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_count}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "uooh",
    user_profile:
      "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MDNfMjAx/MDAxNTk2NDQ1NjUzODA0.cUdM6Gatr8jKhmBwWFhGJaeVg6t0wPwkwshA11gZuY0g.zot86j9Rxj7824AkPhlT_5Bv3MkaP2-MxCELXiMks9kg.JPEG.hwadamtat/IMG_5813.JPG?type=w800",
  },
  image_url:
    "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MDNfMjAx/MDAxNTk2NDQ1NjUzODA0.cUdM6Gatr8jKhmBwWFhGJaeVg6t0wPwkwshA11gZuY0g.zot86j9Rxj7824AkPhlT_5Bv3MkaP2-MxCELXiMks9kg.JPEG.hwadamtat/IMG_5813.JPG?type=w800",
  contents: "이불속에 평생 누워있을래,,",
  comment_count: 10,
  insert_dt: "2022-04-01 21:00:00",
  is_me: false,
};

export default Post;
