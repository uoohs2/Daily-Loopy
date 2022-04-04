import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
  };
  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  text: false,
  _onClick: () => {},
  is_float: false,
  margin: "0px",
  width: "100%",
};

const ElButton = styled.button`
  width: 100%;
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  border: none;
  box-sizing: border-box;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

const FloatButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 16px;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border: none;
  border-radius: 50%;
  font-size: 36px;
  font-weight: bold;
  background-color: #212121;
  color: white;
`;

export default Button;
