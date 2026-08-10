import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import App from "./App";
import editorImg from "./assets/app_editor_merchant.jpeg";
import dashboardImg from "./assets/Screenshot 2026-08-10 155647.png";
import mob1Img from "./assets/dukamob1.jpeg";
import mob2Img from "./assets/dukamob2.jpeg";
import mob3Img from "./assets/dukamob3.jpeg";

for (const src of [editorImg, dashboardImg, mob1Img, mob2Img, mob3Img]) {
  const img = new Image();
  img.src = src;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
