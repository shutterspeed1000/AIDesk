import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}

export default App;
