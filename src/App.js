import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "FrontEnd programming language" },
    { id: 2, title: "Python", body: "BackEnd programming language" },
    { id: 3, title: "Ruby", body: "BackEnd and FrondEnd programming language" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("Отработала функция сортед пост");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyModal />
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <PostFilter 
        filter={filter} 
        setFilter={setFilter} 
      />
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not found</h1>
      )}
    </div>
  );
}

export default App;
