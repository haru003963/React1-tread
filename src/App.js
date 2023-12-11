import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { New } from "./New";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/New">New</Link>
        <br />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/New" element={<New />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
