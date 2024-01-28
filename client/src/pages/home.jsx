import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main() {
  return (
    <div>
      <Row>
        <Col md={8}>
          <lablel>
            Please select the technology you need assistance with.
          </lablel>
          <input type="radio" id="laptop" name="laptop" value="laptop"></input>
          <label for="laptop">Laptop</label>
          <input type="radio" id="laptop" name="laptop" value="laptop"></input>
          <label for="laptop">Laptop</label>
          <input type="radio" id="laptop" name="laptop" value="laptop"></input>
          <label for="laptop">Laptop</label>
          <input type="radio" id="laptop" name="laptop" value="laptop"></input>
          <label for="laptop">Laptop</label>
          <br></br>

          <textarea></textarea>
        </Col>
        <Col md={4}>
          <p id="directions">
            Please complete the form to the left to ask our AI system for
            assistance. It will provide you with a possable solution to your
            issue. If the solution does not work, the AI will open a ticket in
            the CSCF ticketing system for further assitance.
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default Main;
