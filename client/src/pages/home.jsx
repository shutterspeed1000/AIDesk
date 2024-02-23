function Main() {
  const [tech, setTech] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <p id="directions">
        Please complete the form to the left to ask our AI system for
        assistance. It will provide you with a possable solution to your issue.
        If the solution does not work, the AI will open a ticket in the CSCF
        ticketing system for further assitance.
      </p>
      <lablel>Please select the technology you need assistance with.</lablel>
      <br></br>
      <select name="tech" id="tech">
        <option value="laptop">Laptop</option>
        <option value="application">Application</option>
        <option value="website">Website</option>
        <option value="other">Other</option>
      </select>

      <br></br>
      <p>Please enter a brief description of the issue you are experiencing.</p>
      <textarea rows="8" cols="80"></textarea>

      <br></br>

      <button id="submit">Submit</button>
    </div>
  );
}
export default Main;
