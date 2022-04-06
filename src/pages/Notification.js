import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements";
import Card from "../components/Card";

const Notification = (props) => {
  let noti = [
    {
      user_name: "uooh",
      post_id: "post1",
      image_url: "",
    },
    {
      user_name: "uooh",
      post_id: "post2",
      image_url: "",
    },
    {
      user_name: "uooh",
      post_id: "post3",
      image_url: "",
    },
    {
      user_name: "uooh",
      post_id: "post4",
      image_url: "",
    },
    {
      user_name: "uooh",
      post_id: "post5",
      image_url: "",
    },
  ];
  return (
    <React.Fragment>
      <Grid padding="8px 16px" bg="pink">
        {noti.map((v, i) => {
          return <Card key={v.post_id} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Notification;
