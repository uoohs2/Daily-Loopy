import React from "react";
import { Grid, Text, Input, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("빈칸을 입력해주세요.");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  };
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="20px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            type="password"
            placeholder="패스워드를 입력해주세요."
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            login();
            console.log("로그인 완료!");
            // deleteCookie("user_id");
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
