import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_daytime}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
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
    user_name: "루피의 일상",
    user_profile:
      "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MDNfMjAx/MDAxNTk2NDQ1NjUzODA0.cUdM6Gatr8jKhmBwWFhGJaeVg6t0wPwkwshA11gZuY0g.zot86j9Rxj7824AkPhlT_5Bv3MkaP2-MxCELXiMks9kg.JPEG.hwadamtat/IMG_5813.JPG?type=w800",
  },
  image_url:
    "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MDNfMjAx/MDAxNTk2NDQ1NjUzODA0.cUdM6Gatr8jKhmBwWFhGJaeVg6t0wPwkwshA11gZuY0g.zot86j9Rxj7824AkPhlT_5Bv3MkaP2-MxCELXiMks9kg.JPEG.hwadamtat/IMG_5813.JPG?type=w800",
  contents: "이불밖은 위험해!",
  comment_count: 10,
  insert_daytime: "2022-04-01 21:00:00",
};

export default Post;
