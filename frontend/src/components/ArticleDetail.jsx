import React from "react";

function ArticleDetail({ article, onClose }) {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>

      <button onClick={onClose}>Volver</button>
    </div>
  );
}

export default ArticleDetail;
