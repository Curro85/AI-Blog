import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles, onSelectArticle }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Generated Blog</h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onSelect={onSelectArticle}
          />
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
