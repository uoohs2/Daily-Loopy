import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="5px 0px">
          <Grid padding="0px 5px">
            <Button
              no_bg
              _onClick={() => {
                // window.location.replace("/");
                history.push("/");
              }}
            >
              <Text size="24px" bold>
                루피의 일상
              </Text>
            </Button>
          </Grid>
          <Grid is_flex>
            <Button text="내정보" margin="0 3px"></Button>
            <Button
              text="알림"
              _onClick={() => {
                history.push("/notification");
              }}
              margin="0 3px"
            ></Button>
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
              margin="0 3px"
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="5px 0px">
        <Grid padding="0px 5px">
          <Button
            no_bg
            _onClick={() => {
              history.push("/");
            }}
          >
            <Text size="24px" bold>
              루피의 일상
            </Text>
          </Button>
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
            margin="0 3px"
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
            margin="0 3px"
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

//   if (Permit) {
//     return (
//       <Permit>
//         <Grid is_flex padding="5px 0px">
//           <Grid>
//             <Text size="24px" bold>
//               루피의 일상
//             </Text>
//           </Grid>
//           <Grid is_flex>
//             <Button text="내정보"></Button>
//             <Button text="알림"></Button>
//             <Button
//               text="로그아웃"
//               _onClick={() => {
//                 dispatch(userActions.logoutFB());
//               }}
//             ></Button>
//           </Grid>
//         </Grid>
//       </Permit>
//     );
//   } else {
//     return (
//       <React.Fragment>
//         <Grid is_flex padding="5px 0px">
//           <Grid>
//             <Text size="24px" bold>
//               루피의 일상
//             </Text>
//           </Grid>
//           <Grid is_flex>
//             <Button
//               text="로그인"
//               _onClick={() => {
//                 history.push("/login");
//               }}
//             ></Button>
//             <Button
//               text="회원가입"
//               _onClick={() => {
//                 history.push("/signup");
//               }}
//             ></Button>
//           </Grid>
//         </Grid>
//       </React.Fragment>
//     );
//   }
// };

Header.defaultProps = {};

export default Header;
