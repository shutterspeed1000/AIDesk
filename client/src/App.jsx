import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
