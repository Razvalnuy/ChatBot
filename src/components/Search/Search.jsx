import * as React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { sendMessage } from "../api/send";
import { MESSAGE__TYPE } from "../../store/Search";

export default function Search() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <Paper
      sx={{
        display: "flex",
        width: "793px",
        borderRadius: "15px",
        border: "2px solid #121825",
      }}
    >
      <TextField
        placeholder="Спроси о чем-нибудь..."
        fullWidth
        value={text}
        onChange={(event) => setText(event.target.value)}
        color="primary"
      />
      <IconButton
        disabled={loading}
        onClick={async (event) => {
          event.preventDefault();
          if (text.trim() !== "") {
            setText("");
            dispatch({
              type: MESSAGE__TYPE.send,
              text,
            });
            setLoading(true);
            const botResponse = await sendMessage(text);
            setLoading(false);

            console.log("botResponse", botResponse);
            dispatch({
              type: MESSAGE__TYPE.borResponse,
              text: botResponse,
            });
          } else {
            alert("Пустое поле");
          }
        }}
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
