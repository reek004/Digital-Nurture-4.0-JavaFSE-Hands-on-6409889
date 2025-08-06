import React from "react";
import "./App.css";

function App() {
  const officeList = [
  
    { Name: "Spaces", Rent: 67000, Address: "Delhi" },
    { Name: "SmartWorks", Rent: 42000, Address: "Hyderabad" }
  ];

  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>

      <img
        src="/download.jpeg"
        width="25%"
        height="25%"
        alt="Office Space"
      />

      {officeList.map((office, index) => (
        <div key={index}>
          <h2>Name: {office.Name}</h2>
          <h3 style={{ color: office.Rent <= 60000 ? "red" : "green" }}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;