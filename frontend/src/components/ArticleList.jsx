import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles, onSelectArticle }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-zinc-100 mb-3 tracking-tight">
          AI Generated Blog
        </h1>
        <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <ul className="grid gap-6 md:grid-cols-2">
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
