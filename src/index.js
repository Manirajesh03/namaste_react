import ReactDOM from "react-dom/client";
import App from "./App";
import Search from "./components/Search";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
