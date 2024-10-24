import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Routes>
        <Route path="/" element={<h1>Welcome to the home page</h1>} />
        <Route path="/about" element={<h1>You are on the about page</h1>} />
        <Route path="/contact" element={<h1>Please feel free to email us</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
