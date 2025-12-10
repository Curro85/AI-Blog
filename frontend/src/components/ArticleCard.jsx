import React from "react";

function ArticleCard({ article, onSelect }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  return (
    <li
      className="bg-zinc-900 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 p-6 border border-zinc-800 hover:border-zinc-700 group cursor-pointer"
      onClick={() => onSelect(article)}
    >
      <h2 className="text-xl font-semibold text-zinc-100 mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
        {article.title}
      </h2>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs text-zinc-500 font-medium">
          {formatDate(article.createdAt)}
        </span>
      </div>
      <div className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200 flex items-center gap-2">
        Read more
        <span className="text-lg group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </li>
  );
}

export default ArticleCard;
