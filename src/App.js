import "./App.css";
import React, { useState } from "react";

function App() {
  const [selections, setSelections] = useState(initSelections(doctors));

  const rows = [];

  for (let [name, selectedMap] of selections.entries()) {
    rows.push(
      <tr>
        <td>{name}</td>
        {makeSelectCells(selectedMap)}
      </tr>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Schedule Drafting</h1>
        <table>
          {makeHeaders(allShiftOptions.length)}
          <tbody>{rows}</tbody>
        </table>
      </header>
    </div>
  );
}

function makeSelectCells(selectedForUser) {
  const cells = [];

  const selectOptions = allShiftOptions.map((optionName) =>
    makeSelectOption(optionName)
  );

  for (let [selected, blockNumber] of selectedForUser.entries()) {
    cells.push(
      <td>
        <select>
          <option value="">--</option>
          {selectOptions}
        </select>
      </td>
    );
  }

  return cells;
}

function makeSelectOption(optionName) {
  return <option value={optionName}>{optionName}</option>;
}

function makeHeaders(numberOfBlocks) {
  const nameHeader = <th>Doctor</th>;
  const blockHeaders = allShiftOptions.map((option, index) => (
    <th>{index + 1}</th>
  ));
  return (
    <thead>
      {nameHeader}
      {blockHeaders}
    </thead>
  );
}

function initSelections(names) {
  const nameMap = new Map();
  names.forEach((name) => nameMap.set(name, initEmptySchedules()));
  return nameMap;
}

function initEmptySchedules() {
  const map = new Map();
  allShiftOptions.forEach((option, index) => map.set(index + 1, ""));
  return map;
}

const allShiftOptions = [
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

const doctors = [
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
