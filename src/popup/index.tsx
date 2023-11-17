import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const element = document.createElement("div");
element.setAttribute("data-extension-name", "ceb");
document.body.appendChild(element);

const root = createRoot(element);
root.render(<App />);

document.body.style.background = "black";
