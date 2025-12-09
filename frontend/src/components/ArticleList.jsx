import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles, onSelectArticle }) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onSelect={onSelectArticle}
        />
      ))}
    </ul>
  );
}

export default ArticleList;
