import React, { useState } from "react";

//fun little project. uses what we learned in class. enjoy.open source and open to contribution...

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

  const handleNameSelection = (event) => {
    setSelectedName(event.target.value);
  };

  const removeSelectedName = () => {
    const updatedGenerationList = generationList.filter((name) => name.name !== selectedName);
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

  return (
    <div className="container">
      <h1>Random Name Generator</h1>
      <button onClick={generateRandomName}>Generate</button>
      <p>{randomName}</p>

      <div>
        <h2>Select a name to remove or To Add Points:</h2>
        <select value={selectedName} onChange={handleNameSelection}>
          <option value="">-- Select a name --</option>
          {generationList.map((name) => (
            <option key={name.name} value={name.name}>
              {name.name}
            </option>
          ))}
        </select>
        <button onClick={removeSelectedName}>Remove</button>
        <button onClick={() => addPoints(selectedName, 1)}>Add 1 Point</button>
        <button onClick={() => addPoints(selectedName, 3)}>Add 3 Points</button>
      </div>

      <div>
        <h2>Points:</h2>
        {pointsList.map((name) => (
          <p key={name.name}>
            {name.name}: {name.points}
          </p>
        ))}
      </div>
      <p>Fun little project. Uses what we learned in class. Enjoy. Open source/no license and open to contribution. (can link to google sheets/GCP API if want)</p>
      <p>Repository: <a href="https://github.com/Leonardo-Costa9000/vs-code-practice.git">https://github.com/Leonardo-Costa9000/Random-Name-Generator-Miami-52.git</a></p>
      <footer>Created with passion by Leonardo Costa in Florida</footer>

    </div>
  );
};

export default RandomNameGenerator;
