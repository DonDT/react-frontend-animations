import React from "react";
import { Button } from "@material-ui/core";
import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img src={TicketIcon} alt="ticket icon" className="iconImage" />
      {props.text}
    </Button>
  );
};

export default MyButton;
