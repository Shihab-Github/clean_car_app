import ReactDOM from "react-dom/client";
import CarTheme from "./theme/carTheme";
import { ThemeProvider } from "@mui/material";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={CarTheme}>
    <App />
  </ThemeProvider>
);
