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
        className="text-gray-600 hover:text-gray-900 font-medium mb-6 flex items-center gap-2 transition-colors duration-200"
      >
        <span className="text-lg">←</span>
        Volver
      </button>

      <article className="bg-white rounded-lg shadow-sm p-8 md:p-12 border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center gap-2 mb-8 pb-6 border-b border-gray-200">
          <span className="text-sm text-gray-500">
            Publicado el {formatDate(article.createdAt)}
          </span>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </article>
    </div>
  );
}

export default ArticleDetail;
