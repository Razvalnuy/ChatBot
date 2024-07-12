import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Checkbox } from "@mui/material";

export default function ButtonAppBar() {
  const theme = createTheme({
    palette: {
      ochre: {
        main: "#121825",
      },
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="ochre">
          <Toolbar
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: 'center' }}>
              <Avatar src={`./public/avatar/avatar.svg`} alt={"bot_Avatar"} />
              <Box>
                <Typography variant="h6">
                  BotHub: ChatGPT & Midjourney
                </Typography>
                <p style={{ margin: 0, color: "#616D8D" }} variant="h6">
                  Bot
                </p>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Сохранить контекст</Typography>
              <Checkbox sx={{ color: "white" }}></Checkbox>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
