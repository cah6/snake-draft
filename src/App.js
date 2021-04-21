import "./App.css";

function App() {
  const nameHeader = <th>Doctor</th>;

  const blockHeaders = shiftOptions.map((option, index) => (
    <th>{index + 1}</th>
  ));

  const mainCells = shiftOptions.map((option, index) => (
    <td>
      <select></select>
    </td>
  ));

  const rows = doctors.map((name) => (
    <tr>
      <td>{name}</td>
      {mainCells}
    </tr>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Schedule Drafting</h1>
        <table>
          <thead>
            {nameHeader}
            {blockHeaders}
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </header>
    </div>
  );
}

var shiftOptions = [
  "ED",
  "ED",
  "ED",
  "ED",
  "ED",
  "ED",
  "ED (vacation)",
  "ED Valley",
  "Elective",
  "CCU",
  "PICU",
  "MICU",
  "TOX/Elective",
];

var doctors = [
  "Aaron",
  "Nick",
  "Amy",
  "Charmayne",
  "Connor",
  "Junaid",
  "Josh",
  "Haseeb",
  "Alissa",
  "Danielle",
  "Patrick",
  "Nataliya",
];

export default App;
