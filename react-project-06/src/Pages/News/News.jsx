import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../CustomHooks/useTitle";
import EditorsInsights from "./EditorsInsights";

const News = () => {
  // Title
  useTitle("News Detail");
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              {" "}
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights />
    </div>
  );
};

export default News;
