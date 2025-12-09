import React from "react";

function ArticleCard({ article, onSelect }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  return (
    <li className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
        {article.title}
      </h2>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-gray-500 font-medium">
          {formatDate(article.createdAt)}
        </span>
      </div>
      <button
        onClick={() => onSelect(article)}
        className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
      >
        Leer más
        <span className="text-lg">→</span>
      </button>
    </li>
  );
}

export default ArticleCard;
