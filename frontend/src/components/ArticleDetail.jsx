import React from "react";

function ArticleDetail({ article, onClose }) {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={onClose}
        className="text-zinc-400 hover:text-zinc-100 font-medium mb-6 flex items-center gap-2 transition-colors duration-200 group"
      >
        <span className="text-lg group-hover:-translate-x-1 transition-transform">
          ←
        </span>
        Return
      </button>

      <article className="bg-zinc-900 rounded-xl shadow-xl p-8 md:p-12 border border-zinc-800">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3 leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center gap-2 mb-8 pb-6 border-b border-zinc-800">
          <span className="text-sm text-zinc-500">
            Published at: {formatDate(article.createdAt)}
          </span>
        </div>
        <div className="prose prose-lg prose-invert max-w-none text-zinc-300 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </article>
    </div>
  );
}

export default ArticleDetail;
