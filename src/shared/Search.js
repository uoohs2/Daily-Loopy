import React from "react";
import _ from "lodash";

const Search = () => {
  const [text, setText] = React.useState("");

  const debounce = _.debounce((e) => {
    console.log("debounce :::", e.target.value);
  }, 1000);

  const throttle = _.throttle((e) => {
    console.log("throttle :::", e.target.value);
  }, 1000);

  //   const keyPress = React.useCallback(debounce, []);
  const keyPress = React.useCallback(throttle, []);

  const onChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
    keyPress(e);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default Search;
