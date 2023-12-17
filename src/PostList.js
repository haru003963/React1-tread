import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // useParamsを追加

const PostList = () => {
  const { threadId } = useParams(); // パラメータを取得

  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState(""); // 新しい投稿の内容

  // fetchPostsをuseEffectの外に移動
  // 指定されたスレッドの投稿を取得
  // 取得したデータをpostsにセット
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`
      );
      if (!response.ok) {
        throw new Error("投稿の取得に失敗しました。");
      }
      const data = await response.json();
      console.log(data); // データの中身を確認

      //データが正しい形式かを確認
      if (data && Array.isArray(data.posts)) {
        setPosts(data.posts); // 'posts' にデータをセット
      } else {
        throw new Error("投稿データが不正です。");
      }
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  // threadIdが変更されるたびにfetchPosts関数を呼び出す
  useEffect(() => {
    if (threadId) {
      //threadIdが存在する場合
      fetchPosts(); // ここでfetchPostsを呼び出し
    }
  }, [threadId]);

  // 新しい投稿を作成
  // 新しい投稿をAPIに送信し、setPostsを使って投稿一覧を更新
  const handleNewPost = async () => {
    try {
      const response = await axios.post(
        `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,
        {
          post: newPostContent,
        }
      );

      // 投稿後、フォームの内容をクリア
      setNewPostContent("");

      // 投稿後、投稿一覧を再取得して更新
      fetchPosts();
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  return (
    <div>
      <h1>投稿一覧</h1>
      {/* 投稿フォーム */}
      <div>
        {/* テキストボックス */}
        <input
          type="text"
          value={newPostContent}
          onChange={(event) => setNewPostContent(event.target.value)}
        />
        {/* 投稿ボタンを押したらhandleNewPost関数を実行 */}
        <button onClick={handleNewPost}>投稿</button>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.post}</li>
        ))}
      </ul>
    </div>
  );
};

export { PostList };
