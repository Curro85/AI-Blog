import React from "react";

function ArticleCard({ article, onSelect }) {
  return (
    <li>
      <h2>{article.title}</h2>

      <button onClick={() => onSelect(article)}>Leer más</button>
    </li>
  );
}

export default ArticleCard;
