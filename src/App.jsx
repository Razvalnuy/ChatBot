import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import ButtonAppBar from "./components/AppBar/AppBar";
import ChatList from "./components/message/ChatList";
import Search from "./components/Search/Search";
export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: " column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Razvalnuy | Test-Project</h1>

      <Paper
        sx={{
          height: "593px",
          width: "793px",
          background: "#121825",
          borderRadius: "20px",
          overflow: "auto",
        }}
      >
        <ButtonAppBar />
        <ChatList />
      </Paper>
      <Search />
    </Box>
  );
}
