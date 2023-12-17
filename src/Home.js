//Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //追加

export const Home = () => {
  const [threads, setThreads] = useState([]); // スレッドを管理するステート
  // スレッド一覧を取得する関数
  const fetchThreads = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => {
        if (!response.ok) {
          throw new Error("APIからのデータの取得に失敗しました。");
        }
        return response.json();
      })
      .then((data) => {
        setThreads(data); // スレッド情報を更新
      })
      .catch((error) => {
        console.error("エラー:", error);
        // この辺にエラーメッセージ
      });
  };

  useEffect(() => {
    fetchThreads(); // コンポーネントがマウントされた時にスレッド一覧を取得
  }, [fetchThreads]);

  return (
    <div>
      <h1>スレッド一覧</h1>
      <ul>
        {/* 追加 */}
        {threads.map((thread) => (
          <li key={thread.id}>
            <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
