import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <div id="headsize">
      <Row>
        <Col md={4}>
          <img src="cscf-logo.png" id="cscf" />
        </Col>
        <Col>
          <h1 id="title">CSCF AI Helpdesk System</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
