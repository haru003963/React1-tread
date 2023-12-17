//App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { New } from "./New";
import { PostList } from "./PostList"; //スレッド投稿一覧

import "./App.css"; // ここでApp.cssをインポートする

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          {" "}
          {/* ナビゲーションのスタイリング */}
          <Link to="/">Home</Link>
          <Link to="/thread/new">New</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thread/new" element={<New />} />
          <Route path="/thread/:threadId" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
