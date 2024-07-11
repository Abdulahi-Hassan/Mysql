import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const container = document.querySelector("#root");
import { BrowserRouter } from "react-router-dom";
export const endpoint = "http://localhost:3000";
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
