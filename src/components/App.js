import React from "react";
import blogData from "../data/blog";
import About from "./About"
import ArticleList from "./ArticleList"
import Header from "./Header";
import Article from "./Article"


// console.log(blogData);



function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about}
              image={blogData.image} />
      <Article />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}
export default App;
