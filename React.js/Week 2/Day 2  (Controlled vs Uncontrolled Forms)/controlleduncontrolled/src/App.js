import logo from "./logo.svg";
import "./App.css";
import ControlledForm from "./controlled/ControlledForm";
import UncontrolledForm from "./uncontrolled/UncontrolledForm";
import Table from "./Table/Table";

function App() {

  // useEffect

  return (
    <div className="App">
      <div className="controlledContainer">
        <h1>Controlled Form</h1>
        <ControlledForm />
      </div>

      <hr />

      <div className="uncontrolledContainer">
        <h1>UnControlled Form</h1>
        <UncontrolledForm />
      </div>

      <div className="TableComponent">
        {/* <Table data={} /> */}
      </div>
    </div>
  );
}

export default App;
