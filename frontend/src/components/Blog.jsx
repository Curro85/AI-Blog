import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";

function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await fetch("http://localhost:3000/articles");
      if (!response.ok) {
        console.log("Something went wrong");
        return;
      }
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error loading articles", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
