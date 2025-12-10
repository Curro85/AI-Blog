import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";

function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await fetch("http://52.54.234.219:3000/articles");
      if (!response.ok) {
        console.log("Something went wrong");
        return;
      }
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error loading articles", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-zinc-400 text-lg">Cargando artículos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {!selectedArticle && (
        <ArticleList articles={articles} onSelectArticle={setSelectedArticle} />
      )}

      {selectedArticle && (
        <ArticleDetail
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}

export default Blog;
