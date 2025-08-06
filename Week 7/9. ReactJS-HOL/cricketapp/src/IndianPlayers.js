import React from "react";

const IndianPlayers = () => {
  const T20Players = [
    "Shubman Gill",
    "Yashasvi Jaiswal",
    "Tilak Varma",
    "Ruturaj Gaikwad",
    "Mohammed Siraj",
    "Arshdeep Singh",
    "Axar Patel",
    "Kuldeep Yadav",
    "Rinku Singh",
    "Sanju Samson",
  ];

  const RanjiTrophyPlayers = [
    "Sarfaraz Khan",
    "Dhruv Jurel",
    "Akash Deep",
    "Yash Dayal",
    "Musheer Khan",
    "Nitish Rana",
    "Abhimanyu Easwaran",
    "Rajat Patidar",
    "Harshit Rana",
  ];

  const allIndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const OddPlayers = ({ players }) => {
    const [first, , third, , fifth] = players;
    return (
      <div className="odd-players">
        <h3>Odd Players</h3>
        <ul>
          <li>First : {first}</li>
          <li>Third : {third}</li>
          <li>Fifth : {fifth}</li>
        </ul>
      </div>
    );
  };

  const EvenPlayers = ({ players }) => {
    const [, second, , fourth, , sixth] = players;
    return (
            <div className="even-players">
        <h3>Even Players</h3>
        <ul>
          <li>Second : {second}</li>
          <li>Fourth : {fourth}</li>
          <li>Sixth : {sixth}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Indian Team</h1>
      <hr />
      <OddPlayers players={allIndianPlayers} />
      <hr />
      <EvenPlayers players={allIndianPlayers} />
      <hr />
      <h2>List of Indian Players Merged:</h2>
      <ul>
        {allIndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
