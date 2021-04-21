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
        <div class="table-wrapper">
          <table>
            {makeHeaders(allShiftOptions.length)}
            <tbody>{rows}</tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

function makeSelectCells(name, allSelections, setSelections, selectedForUser) {
  return [...selectedForUser].map((selected, blockNumber) => {
    const options = filterBlockOptions(
      allShiftOptions,
      blockNumber,
      name,
      allSelections
    );

    return (
      <td>
        <select
          class={allSelections.get(name).get(blockNumber)}
          value={allSelections.get(name).get(blockNumber)}
          onChange={(e) =>
            onSelected(name, blockNumber, allSelections, setSelections, e)
          }
        >
          <option value="">--</option>
          {options.map((optionName) => (
            <option
              class="ED"
              className="ED"
              style={{ backgroundColor: "lightblue" }}
            >
              {optionName}
            </option>
          ))}
        </select>
      </td>
    );
  });
}

//////////////////////////////////////////////////////////////////////////////
// Filters

function filterBlockOptions(allOptions, blockNumber, name, allSelections) {
  if (allSelections.get(name).get(blockNumber) !== "") {
    return allOptions.filter((v) =>
      filterSelectedOnlyShowsSelected(v, blockNumber, name, allSelections)
    );
  } else {
    return allOptions
      .filter((v) => filterChosenByUser(v, blockNumber, name, allSelections))
      .filter((v) => filterMax2NonEDInRow(v, blockNumber, name, allSelections))
      .filter((v) => filterNoMICUBlock1(v, blockNumber))
      .filter((v) => filterNoToxBlock7(v, blockNumber))
      .filter((v) => filterNoPICUBlock9(v, blockNumber))
      .filter((v) => oneMICUPerBlock(v, blockNumber, name, allSelections))
      .filter((v) =>
        twoOffRotationPerBlock(v, blockNumber, name, allSelections)
      )
      .filter((v) =>
        filterMax3VacationsInBlock(v, blockNumber, name, allSelections)
      );
  }
}

function filterSelectedOnlyShowsSelected(
  blockName,
  blockNumber,
  name,
  allSelections
) {
  const selectedForThisBlock = allSelections.get(name).get(blockNumber);

  if (selectedForThisBlock !== "" && blockName !== selectedForThisBlock) {
    return false;
  } else {
    return true;
  }
}

// User must select one of each allShiftOptions by the end. Only show ones not
// already chosen by this user.
function filterChosenByUser(blockName, blockNumber, name, allSelections) {
  const forName = allSelections.get(name);

  const selectedByName = [...forName.values()];

  if (selectedByName.includes(blockName)) {
    return false;
  } else {
    return true;
  }
}

// Cannot have 3 non-ED shifts in a row.
function filterMax2NonEDInRow(blockName, blockNumber, name, allSelections) {
  const forName = allSelections.get(name);

  const arrCopy = [...forName.values()];
  arrCopy[blockNumber] = blockName;

  const threes = getThreeElementPossibilities(arrCopy, blockNumber);

  const ruleBreakers = threes.filter((xs) =>
    xs.every((shift) => isNotEdShift(shift) && shift !== "")
  );

  if (ruleBreakers.length >= 1) {
    return false;
  } else {
    return true;
  }
}

function getThreeElementPossibilities(arr, index) {
  const possibleSlices = [
    [index - 2, index + 1],
    [index - 1, index + 2],
    [index, index + 3],
  ];

  const slices = [];

  for (const [start, end] of possibleSlices) {
    if (start >= 0 && end <= arr.length) {
      slices.push(arr.slice(start, end));
    }
  }

  return slices;
}

function filterNoMICUBlock1(blockName, blockNumber) {
  if (blockName === "MICU" && blockNumber === 0) {
    return false;
  } else {
    return true;
  }
}

function filterNoToxBlock7(blockName, blockNumber) {
  if (blockName === "TOX/Elec" && blockNumber === 6) {
    return false;
  } else {
    return true;
  }
}

function filterNoPICUBlock9(blockName, blockNumber) {
  if (blockName === "PICU" && blockNumber === 8) {
    return false;
  } else {
    return true;
  }
}

function oneMICUPerBlock(blockName, blockNumber, name, allSelections) {
  const selectedThisBlock = getSelectedFromBlock(allSelections, blockNumber);

  if (blockName === "MICU" && selectedThisBlock.includes(blockName)) {
    return false;
  } else {
    return true;
  }
}

function twoOffRotationPerBlock(blockName, blockNumber, name, allSelections) {
  const selectedThisBlock = getSelectedFromBlock(allSelections, blockNumber);

  if (
    isOffRotation(blockName) &&
    selectedThisBlock.filter((item) => item === blockName).length >= 2
  ) {
    return false;
  } else {
    return true;
  }
}

function filterMax3VacationsInBlock(
  blockName,
  blockNumber,
  name,
  allSelections
) {
  const selectedThisBlock = getSelectedFromBlock(allSelections, blockNumber);

  const numVacationsThisBlock = selectedThisBlock.filter(isVacation).length;

  if (isVacation(blockName) && numVacationsThisBlock >= 3) {
    return false;
  } else {
    return true;
  }
}

function getSelectedFromBlock(allSelections, blockNumber) {
  const selected = [];
  for (let blockToShift of allSelections.values()) {
    for (let [thisBlockNumber, shiftName] of blockToShift.entries()) {
      if (thisBlockNumber === blockNumber) {
        selected.push(shiftName);
      }
    }
  }
  return selected;
}

//////////////////////////////////////////////////////////////////////////////

function onSelected(name, blockNumber, allSelections, setSelections, event) {
  allSelections.get(name).set(blockNumber, event.target.value);
  setSelections(new Map(allSelections));
}

function makeHeaders(numberOfBlocks) {
  const nameHeader = <th>Name</th>;
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
  "ED 1",
  "ED 2",
  "ED 3",
  "ED 4",
  "ED 5",
  "ED 🏝 1",
  "ED 🏝 2",
  "ED Valley",
  "Elective 🏝",
  "CCU",
  "PICU",
  "MICU",
  "TOX/Elec",
];

function isNotEdShift(shiftName) {
  return !shiftName.startsWith("ED");
}

function isVacation(shiftName) {
  return shiftName.startsWith("ED 🏝") || shiftName.startsWith("Elective");
}

// eslint-disable-next-line
function isOffRotation(shiftName) {
  return shiftName === "ED Valley" || !shiftName.startsWith("ED");
}

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
