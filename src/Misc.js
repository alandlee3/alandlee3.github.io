import { useState, useEffect, useRef } from "react";
import "./Misc.css";

function Misc() {
  const [points, setPoints] = useState(0);
  const [purchases, setPurchases] = useState([0]);
  const [openLevels, setOpenLevels] = useState([1]);
  const [combo, setCombo] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [multiplier, setMultiplier] = useState(1);
  const [particles, setParticles] = useState([]);
  const endLevel = 21;
  const comboTimeout = useRef(null);

  // Passive income effect - updates every 1 second
  useEffect(() => {
    const intervalTimer = setInterval(() => {
      let temp = 0;
      for (let i = 0; i < purchases.length; i++) {
        temp += Math.pow(2, i + 1) * purchases[i];
      }
      setPoints((points) => points + temp * multiplier);
    }, 1000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [purchases, multiplier]);

  // Combo system - resets combo after 2 seconds of no clicks
  useEffect(() => {
    if (combo > 0) {
      if (comboTimeout.current) {
        clearTimeout(comboTimeout.current);
      }
      comboTimeout.current = setTimeout(() => {
        setCombo(0);
      }, 2000);
    }
    return () => {
      if (comboTimeout.current) {
        clearTimeout(comboTimeout.current);
      }
    };
  }, [lastClickTime, combo]);

  // Check for achievements
  useEffect(() => {
    const newAchievements = [];

    if (totalClicks >= 100 && !achievements.includes("Century Clicker")) {
      newAchievements.push("Century Clicker");
      setMultiplier((m) => m * 1.1);
    }
    if (totalClicks >= 500 && !achievements.includes("Click Master")) {
      newAchievements.push("Click Master");
      setMultiplier((m) => m * 1.2);
    }
    if (combo >= 10 && !achievements.includes("Combo King")) {
      newAchievements.push("Combo King");
      setMultiplier((m) => m * 1.15);
    }
    if (openLevels.length >= 10 && !achievements.includes("Halfway There")) {
      newAchievements.push("Halfway There");
      setMultiplier((m) => m * 1.25);
    }

    if (newAchievements.length > 0) {
      setAchievements([...achievements, ...newAchievements]);
    }
  }, [totalClicks, combo, openLevels, achievements]);

  // Particle animation cleanup
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles([]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  function handleClick(event) {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime;

    // Update combo if clicking fast enough (within 2 seconds)
    if (timeSinceLastClick < 2000 && lastClickTime > 0) {
      setCombo((c) => c + 1);
    } else {
      setCombo(1);
    }

    setLastClickTime(now);
    setTotalClicks((c) => c + 1);

    // Calculate reward with combo bonus
    const baseReward = Math.round(
      Math.pow(2, document.getElementById("click-me").offsetWidth / 100)
    );
    const comboBonus = combo > 0 ? 1 + combo * 0.1 : 1;
    const totalReward = Math.round(baseReward * comboBonus * multiplier);

    setPoints((points) => points + totalReward);

    // Create particle effect
    const particle = {
      id: now,
      x: event.clientX,
      y: event.clientY,
      value: `+$${totalReward}`,
    };
    setParticles((p) => [...p, particle]);
  }

  function buyLevel(level) {
    if (points >= Math.pow(3, level)) {
      const newPurchases = [...purchases];
      newPurchases[level - 1] += 1;
      setPurchases(newPurchases);
      setPoints((points) => points - Math.pow(3, level));

      if (newPurchases[newPurchases.length - 1] >= 3) {
        setOpenLevels([...openLevels, openLevels.length + 1]);
        setPurchases([...newPurchases, 0]);
      }
    }
    if (purchases.length >= endLevel && purchases[endLevel - 1] >= 3) {
      setPoints(0);
      setPurchases([]);
      setOpenLevels([]);
      document.getElementById("click-me").style.display = "none";
      document.getElementById("play-again").style.display = "inline";
    }
  }

  // Level names for flavor
  const getLevelName = (level) => {
    const names = [
      "Intern",
      "Junior Dev",
      "Developer",
      "Senior Dev",
      "Tech Lead",
      "Architect",
      "Principal",
      "Engineering Manager",
      "Director",
      "VP Engineering",
      "CTO",
      "Founder",
      "Angel Investor",
      "VC Partner",
      "Unicorn CEO",
      "Tech Mogul",
      "Industry Titan",
      "Innovation Legend",
      "Silicon Valley Icon",
      "Tech Visionary",
      "Digital Emperor",
    ];
    return names[level - 1] || `Level ${level}`;
  };

  // Get theme color based on progress
  const getThemeColor = () => {
    const progress = openLevels.length;
    if (progress >= 20) return "#ff00ff"; // Magenta
    if (progress >= 15) return "#ff0000"; // Red
    if (progress >= 10) return "#ff8800"; // Orange
    if (progress >= 5) return "#00ff00"; // Green
    return "#00aaff"; // Blue (default)
  };

  // Calculate passive income per second
  const getPassiveIncome = () => {
    let total = 0;
    for (let i = 0; i < purchases.length; i++) {
      total += Math.pow(2, i + 1) * purchases[i];
    }
    return Math.round(total * multiplier);
  };

  function LevelButton({ level }) {
    const canAfford = points >= Math.pow(3, level);
    return (
      <button
        className={`level-button ${canAfford ? "affordable" : ""}`}
        onClick={() => buyLevel(level)}
        style={{ borderColor: getThemeColor() }}
      >
        <strong>{getLevelName(level)}</strong>
        <br />
        Cost: ${Math.pow(3, level)} | Owned: {purchases[level - 1]}
        <br />
        Income: ${Math.pow(2, level + 1)}/s
      </button>
    );
  }

  return (
    <div className="Misc">
      <div className="misc-text">
        <h1 style={{ color: getThemeColor() }}>Career Clicker</h1>
        <p className="subtitle">Click your way to tech stardom!</p>
      </div>

      {/* Stats Dashboard */}
      <div className="stats-panel">
        <div className="stat-item">
          <strong>Balance:</strong> ${points.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="stat-item">
          <strong>Income:</strong> ${getPassiveIncome()}/sec
        </div>
        <div className="stat-item">
          <strong>Multiplier:</strong> {multiplier.toFixed(2)}x
        </div>
        <div className="stat-item">
          <strong>Total Clicks:</strong> {totalClicks}
        </div>
      </div>

      {/* Main Click Button */}
      <button
        id="click-me"
        className="button-primary"
        onClick={handleClick}
        style={{ borderColor: getThemeColor(), boxShadow: `0 0 20px ${getThemeColor()}` }}
      >
        💰 Payday 💰
      </button>

      {/* Combo Counter */}
      {combo > 1 && (
        <div className="combo-indicator" style={{ color: getThemeColor() }}>
          🔥 COMBO x{combo}! 🔥
          <br />
          <small>+{Math.round(combo * 10)}% bonus per click</small>
        </div>
      )}

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-label">
          Career Progress: {openLevels.length} / {endLevel}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(openLevels.length / endLevel) * 100}%`,
              backgroundColor: getThemeColor(),
            }}
          />
        </div>
      </div>

      {/* Achievements */}
      <div className="achievements-panel">
        <h3>🏆 Achievements:</h3>
        <div className="achievements-list">
          {achievements.length > 0 ? (
            achievements.map((achievement, idx) => (
              <span key={idx} className="achievement-badge">
                {achievement}
              </span>
            ))
          ) : (
            <span className="no-achievements">No achievements unlocked yet</span>
          )}
        </div>
      </div>

      {/* Level Buttons */}
      <div className="level-buttons">
        {openLevels.map((num) => (
          <LevelButton key={num} level={num} />
        ))}
      </div>

      {/* Particle Effects */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            color: getThemeColor(),
          }}
        >
          {particle.value}
        </div>
      ))}

      {/* Play Again Button */}
      <button
        id="play-again"
        onClick={() => {
          setPoints(0);
          setPurchases([0]);
          setOpenLevels([1]);
          setCombo(0);
          setTotalClicks(0);
          setAchievements([]);
          setMultiplier(1);
          setParticles([]);
          document.getElementById("click-me").style.display = "inline";
          document.getElementById("play-again").style.display = "none";
        }}
      >
        🎮 Play Again? 🎮
      </button>
    </div>
  );
}

export default Misc;