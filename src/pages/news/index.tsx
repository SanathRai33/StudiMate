"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}`
        );
        setArticles(res?.data?.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-gray-600">Loading news...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles?.map((article, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {article?.urlToImage && (
              <img
                src={article?.urlToImage}
                alt={article?.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{article?.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {article?.description || "No description available."}
              </p>
              <p className="text-xs text-gray-400 mb-3">
                {new Date(article?.publishedAt).toLocaleDateString()}
              </p>
              <a
                href={article?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
