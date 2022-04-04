import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../components/Upload";

const PostWrite = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="20px" bold>
          게시글 작성
        </Text>
        <Upload></Upload>
      </Grid>
      <Grid>
        <Grid padding="16px">
          <Text size="20px" bold>
            미리보기
          </Text>
        </Grid>
        <Image shape="rectangle" />
      </Grid>
      <Grid padding="16px">
        <Input multiLine rows label="게시글 내용" Placeholder="게시글 작성" />
      </Grid>
      <Grid>
        <Button text="작성하기"></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
