// 元々App.jsに書いていたものをこっちに書き写す

import React, { useState, useEffect } from "react";

export const Home = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => {
        if (!response.ok) {
          throw new Error("APIからのデータの取得に失敗しました。");
        }
        return response.json();
      })
      .then((data) => {
        setThreads(data); // スレッド情報を状態にセット
      })
      .catch((error) => {
        console.error("エラー:", error);
      });
  };

  return (
    <>
      <header>新着スレッド</header>
      <main>
        <ul>
          {threads.map((thread) => {
            // console.log(thread); // 各スレッドのデータをコンソールに表示
            return (
              <li key={thread.id}>{thread.title}</li> // スレッド情報をリスト表示
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;
