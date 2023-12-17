//New.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const New = ({ onAddThread }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const onClickAddText = () => {
    axios
      .post("https://railway.bulletinboard.techtrain.dev/threads", {
        title: text,
      })
      .then((response) => {
        // onAddThread(response.data); // 新しいスレッドを親コンポーネントに追加する
        navigate("/"); //ページ遷移（Home.jsを表示させる）
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>新しいスレッド作成</h1>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={onClickAddText}>追加</button>
    </div>
  );
};
