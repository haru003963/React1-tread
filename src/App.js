//App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { New } from "./New";
import { PostList } from "./PostList"; //スレッド投稿一覧

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/thread/new">New</Link>
        <br />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thread/new" element={<New />} />
          {/* 追加 */}
          <Route path="/thread/:threadId" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
