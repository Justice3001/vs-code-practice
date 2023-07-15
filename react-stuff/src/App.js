import React, { useState, useEffect } from "react";
import "../src/index.css";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(list);
  const [shouldAnimateList, setShouldAnimateList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [shouldAnimateCard, setShouldAnimateCard] = useState(false);

  const handleSearch = (event) => {
    const value = event.target.value;
    if (value === "") {
      setFilterList(list);
      setSelectedItem(null);
      return;
    }
    const filteredValues = list.filter(
      (item) => item.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
    setSelectedItem(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (filterList.includes(event.target.value)) {
        setSelectedItem(event.target.value);
      } else {
        setSelectedItem(null);
      }
    }
  };

  useEffect(() => {
    setShouldAnimateList(true);
    setShouldAnimateCard(true);

    const listTimeout = setTimeout(() => {
      setShouldAnimateList(false);
    }, 300);

    const cardTimeout = setTimeout(() => {
      setShouldAnimateCard(false);
    }, 300);

    return () => {
      clearTimeout(listTimeout);
      clearTimeout(cardTimeout);
    };
  }, [filterList, selectedItem]);

  return (
    <div className="app">
      <h1 className="title">suchen.io</h1>
      <h2>The Modern Search Engine. Concise. <span className="simple"> Simple. </span> <span className="smart">Smart.</span></h2>
      <div className="search-container">
        <input
          className="search-input"
          name="query"
          type="text"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="content-container">
        <div className="list-container">
          {filterList &&
            filterList.map((item, index) => (
              <div
                key={index}
                className={`list-item ${shouldAnimateList ? "animate" : ""}`}
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </div>
            ))}
        </div>
        {selectedItem && (
          <div
            className={`card ${shouldAnimateCard ? "animate" : ""}`}
          >
            <h2>{selectedItem}</h2>
            <p>This is a sample header.</p>
            <p>This is some small text like a card.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
