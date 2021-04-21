import "./App.css";
import React, { useState } from "react";

function App() {
  const [selections, setSelections] = useState(initSelections(doctors));

  console.log(selections);

  const rows = [...selections].map(([name, currentSelections]) => (
    <tr>
      <td>{name}</td>
      {makeSelectCells(name, selections, setSelections, currentSelections)}
    </tr>
  ));

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

function makeSelectCells(name, allSelections, setSelections, selectedForUser) {
  return [...selectedForUser].map((selected, blockNumber) => (
    <td>
      <select
        onChange={(e) =>
          onSelected(name, blockNumber, allSelections, setSelections, e)
        }
      >
        <option value="">--</option>
        {allShiftOptions.map((optionName) => (
          <option>{optionName}</option>
        ))}
      </select>
    </td>
  ));
}

function onSelected(name, blockNumber, allSelections, setSelections, event) {
  allSelections.get(name).set(blockNumber, event.target.value);
  setSelections(new Map(allSelections));
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
  allShiftOptions.forEach((option, index) => map.set(index, ""));
  return map;
}

const allShiftOptions = [
  "ED",
  "ED",
  "ED",
  "ED",
  "ED",
  "ED",
  "ED 🏝",
  "ED Valley",
  "Elective",
  "CCU",
  "PICU",
  "MICU",
  "TOX/Elec",
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
