import React, { useState } from "react";
import "./App.css";
import House from "./House";
import { motion } from "framer-motion";

const houses = Array.from({ length: 10 }, (_, i) => `House ${i + 1}`);

export default function App() {
  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <div className="container">
      <motion.header
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Microgrid Energy Management</h1>
      </motion.header>
      <motion.div 
        className="microgrid"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {houses.map((house, index) => (
          <House key={index} name={house} onClick={() => setSelectedHouse(house)} />
        ))}
      </motion.div>
      {selectedHouse && (
        <div className="dashboard">
          <h2>Dashboard</h2>
          <p>Selected: {selectedHouse}</p>
          <select>
            <option>View Details</option>
            <option>Energy Usage</option>
            <option>Consumption Pattern</option>
          </select>
          <button onClick={() => setSelectedHouse(null)}>Close</button>
        </div>
      )}
    </div>
  );
}