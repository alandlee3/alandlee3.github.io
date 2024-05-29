import { useState, useEffect } from "react";
import "./Misc.css";

function Misc() {
  const [points, setPoints] = useState(0);
  const [purchases, setPurchases] = useState([0]);
  const [openLevels, setOpenLevels] = useState([1]);
  const endLevel = 21;

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      let temp = 0;
      for (let i = 0; i < purchases.length; i++) {
        temp += Math.pow(2, i + 1) * purchases[i];
      }
      setPoints((points) => points + temp);
    }, 1000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [purchases]);

  function handleClick() {
    setPoints(
      (points) =>
        points +
        Math.round(
          Math.pow(2, document.getElementById("click-me").offsetWidth / 100)
        )
    );
  }

  function buyLevel(level) {
    if (points >= Math.pow(3, level)) {
      let newans = purchases;
      newans[level - 1] += 1;
      setPurchases(newans);
      setPoints((points) => points - Math.pow(3, level));
      if (purchases[purchases.length - 1] >= 3) {
        setOpenLevels(openLevels.concat([openLevels.length + 1]));
        setPurchases(purchases.concat([0]));
      }
    }
    if (purchases.length >= endLevel && purchases[endLevel - 1] >= 3) {
      setPoints((points) => 0);
      setPurchases([]);
      setOpenLevels([]);
      document.getElementById("click-me").style.display = "none";
      document.getElementById("play-again").style.display = "inline";
    }
  }

  function LevelButton({ level }) {
    return (
      <button className="level-button" onClick={() => buyLevel(level)}>
        Buy Level {level} <br /> $: {Math.pow(3, level)}
        <br /> #: {purchases[level - 1]}
      </button>
    );
  }

  return (
    <div className="Misc">
      <div className="misc-text">
        <h1>Game</h1>
      </div>
      <button id="click-me" className="button-primary" onClick={handleClick}>
        Payday.
      </button>
      <p>You currently have ${points}.</p>
      <div className="level-buttons">
        {openLevels.map((num) => (
          <LevelButton level={num} />
        ))}
      </div>
      <button
        id="play-again"
        onClick={() => {
          setPoints((points) => 0);
          setPurchases([0]);
          setOpenLevels([1]);
          document.getElementById("click-me").style.display = "inline";
          document.getElementById("play-again").style.display = "none";
        }}
      >
        Play Again?
      </button>
    </div>
  );
}

export default Misc;
