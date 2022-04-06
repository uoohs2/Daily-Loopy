import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../components/Upload";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = (props) => {
  const { history } = props;
  const is_login = useSelector((state) => state.user.is_login);
  const post_list = useSelector((state) => state.post.list);

  // console.log(props.match.params.id);
  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;
  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("게시물 정보가 없습니다.");
      history.goBack();
      return;
    }
    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const [contents, setContents] = React.useState(_post ? _post.contents : "");
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const dispatch = useDispatch();
  const addPost = () => {
    if (!contents || !preview) {
      window.alert("게시글을 모두 작성해주세요.");
      return;
    }
    dispatch(postActions.addPostFB(contents));
  };
  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
  };

  const preview = useSelector((state) => state.image.preview);

  if (!is_login) {
    return (
      <Grid margin="150px 0px" center>
        <Text size="24px" margin="50px 0px">
          게시물 작성은 로그인시 가능합니다.
        </Text>
        <Button
          width="70%"
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인
        </Button>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="20px" bold>
          {is_edit ? "게시글 수정" : "게시글 작성"}
        </Text>
        <Upload></Upload>
      </Grid>
      <Grid>
        <Grid padding="16px">
          <Text size="20px" bold>
            미리보기
          </Text>
        </Grid>
        <Image
          shape="rectangle"
          src_02={
            preview
              ? preview
              : "http://arewethereyetblog.net/wp-content/uploads/2014/08/4-3-dummy-image7-1024x768.jpg"
          }
        />
      </Grid>
      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          multiLine
          rows
          label="게시글 내용"
          Placeholder="게시글 작성"
        />
      </Grid>
      <Grid padding="16px">
        {is_edit ? (
          <Button _onClick={editPost} text="수정하기"></Button>
        ) : (
          <Button _onClick={addPost} text="작성하기"></Button>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
