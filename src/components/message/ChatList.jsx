import React from "react";
import { Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function MessageItem({ user, text }) {
  const style = {
    display: "flex",
    flexDirection: user.align === "left" ? "row" : "row-reverse",
    alignItems: "center",
    marginBottom: "20px",
  };

  const messageStyle = {
    background: user.bgColor,
    padding: "10px 25px 10px 10px",
    borderRadius: "15px",
    maxWidth: "70%",
  };

  return (
    <div style={style}>
      {user.name === "bot" ? (
        <Typography sx={{ color: "white", marginRight: "10px" }}>
          Gemini
        </Typography>
      ) : null}

      <Avatar alt={user.name} src={user.avatar} />
      <Typography
        color={"white"}
        style={messageStyle}
        sx={{ marginLeft: user.align === "left" ? "5px" : "0" }}
      >
        {text}
      </Typography>
    </div>
  );
}

export default function ChatList() {
  const messages = useSelector((state) => state.messages);

  return (
    <div>
      {messages.map((message) => (
        <MessageItem key={message.id} {...message} />
      ))}
    </div>
  );
}
