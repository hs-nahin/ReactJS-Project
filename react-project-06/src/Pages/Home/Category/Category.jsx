import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../../CustomHooks/useTitle";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  // Title
  useTitle("Home");
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {id && <h1>Total Category News: {categoryNews.length}</h1>}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
