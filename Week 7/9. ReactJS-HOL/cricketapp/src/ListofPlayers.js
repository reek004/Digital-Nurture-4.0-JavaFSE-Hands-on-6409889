import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 105 },
    { name: "Rohit Sharma", score: 92 },
    { name: "Shubman Gill", score: 88 },
    { name: "KL Rahul", score: 85 },
    { name: "Suryakumar Yadav", score: 76 },
    { name: "Hardik Pandya", score: 68 },
    { name: "Rishabh Pant", score: 82 },
    { name: "Ravindra Jadeja", score: 73 },
    { name: "Jasprit Bumrah", score: 45 },
    { name: "Mohammed Siraj", score: 38 },
    { name: "Arshdeep Singh", score: 42 },
    { name: "Yuzvendra Chahal", score: 35 },
    { name: "Axar Patel", score: 67 },
    { name: "Mohammed Shami", score: 41 },
    { name: "Ishan Kishan", score: 79 },
    { name: "Shreyas Iyer", score: 84 },
    { name: "Deepak Chahar", score: 52 },
    { name: "Shardul Thakur", score: 58 },
    { name: "Washington Sundar", score: 63 },
    { name: "Kuldeep Yadav", score: 39 },
    { name: "Bhuvneshwar Kumar", score: 48 },
    { name: "Prasidh Krishna", score: 33 },
    { name: "Avesh Khan", score: 29 },
    
  ];

  const playersWithScoresLessThan70 = players.filter(
    (player) => player.score <= 70
  );

  return (
    <div>
      <ul>
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>

      <hr />

      <h2>List of Players having Scores Less than 70:</h2>
      <ul>
        {playersWithScoresLessThan70.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;