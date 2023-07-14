import React, { useState } from "react";

const names = [
  { name: "Denis", weight: 0.1, points: 0 },
  { name: "Xiang", weight: 0.1, points: 0 },
  { name: "Ricky", weight: 0.1, points: 0 },
  { name: "Carlos", weight: 0.1, points: 0 },
  { name: "Leo", weight: 0.1, points: 0 },
  { name: "Tyler", weight: 0.1, points: 0 },
  { name: "Jaylyn", weight: 0.1, points: 0 },
  { name: "Yaira", weight: 0.1, points: 0 },
  { name: "Jaqueila", weight: 0.1, points: 0 },
  { name: "Kuyne", weight: 0.1, points: 0 },
];

const RandomNameGenerator = () => {
  const [randomName, setRandomName] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [generationList, setGenerationList] = useState(names);
  const [pointsList, setPointsList] = useState([]);
  const [resetClicked, setResetClicked] = useState(false);

  const generateRandomName = () => {
    const randomNumber = Math.random();
    let cumulativeProbability = 0;

    for (const name of generationList) {
      cumulativeProbability += name.weight;
      if (randomNumber < cumulativeProbability) {
        setRandomName(name.name);
        setSelectedName(name.name);
        addPoints(name.name, 1);
        break;
      }
    }
  };

  const [nameVisible, setNameVisible] = useState(false);

  const handleGenerateClick = () => {
    generateRandomName();
    setNameVisible(false);
    setTimeout(() => {
      setNameVisible(true);
    }, 100);
  };

  const handleNameSelection = (event) => {
    setSelectedName(event.target.value);
  };

  const removeSelectedName = () => {
    const updatedGenerationList = generationList.filter(
      (name) => name.name !== selectedName
    );
    setGenerationList(updatedGenerationList);
    setSelectedName("");
  };

  const addPoints = (name, points) => {
    const updatedPointsList = pointsList.map((item) => {
      if (item.name === name) {
        return { ...item, points: item.points + points };
      }
      return item;
    });

    const existingName = updatedPointsList.find((item) => item.name === name);
    if (!existingName) {
      updatedPointsList.push({ name, points });
    }

    setPointsList(updatedPointsList);
  };

  const resetPointsAndName = () => {
    setResetClicked(true);
    setTimeout(() => {
      setResetClicked(false);
      setRandomName("");
      setSelectedName("");
      setPointsList([]);
    }, 1000);
  };

  return (
    <div className="container">
      <h1>MIT.io</h1>
      <button className="glow-on-hover" onClick={handleGenerateClick}>
        Generate
      </button>
      <p className={`name ${nameVisible ? "show" : ""}`}>{randomName}</p>

      <div>
        <h2>Select a Name to Remove or To Add Points Too</h2>
        <select
          className="select-name"
          value={selectedName}
          onChange={handleNameSelection}
        >
          <option value="">-- Select a Name --</option>
          {generationList.map((name) => (
            <option key={name.name} value={name.name}>
              {name.name}
            </option>
          ))}
        </select>
        <button id="remove-btn" onClick={removeSelectedName}>Remove</button>
        <button onClick={() => addPoints(selectedName, 1)}>Add 1 Point</button>
        <button onClick={() => addPoints(selectedName, 3)}>Add 3 Points</button>
      </div>

      <div>
        <h2>Points:</h2>
        {pointsList.map((name) => (
          <p id="name-points" key={name.name}>
            {name.name}: {name.points}
          </p>
        ))}
      </div>
      <button
        className={`reset-button ${resetClicked ? "animated" : ""}`}
        onClick={resetPointsAndName}
      >
        Reset
      </button>
      <p id="note1">
        Fun little project. Uses what we learned in class. Enjoy. Open
        source/no license and open to contribution. (Can link to google
        sheets/GCP API if want)
      </p>
      <p id="note2">
      <button onClick={() => window.location.href = "https://github.com/Leonardo-Costa9000/vs-code-practice.git"}>Visit This Repository</button>
      </p>
      <footer>
      <strong>Created with </strong> <strong id ="heart"> ♥ </strong> <strong> by Leonardo Costa in Florida</strong>
      </footer>
      
    </div>
  );
};

export default RandomNameGenerator;
