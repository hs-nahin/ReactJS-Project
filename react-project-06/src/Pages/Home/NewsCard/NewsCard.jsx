import moment from "moment";
import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { SlShare } from "react-icons/sl";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image
          src={author?.img}
          className="mt-2"
          style={{ height: "40px" }}
          roundedCircle
        />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small> {moment(author?.published_date).format("yyyy-MM-D")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark style={{ cursor: "pointer" }} />
          <SlShare className="ms-2" style={{ cursor: "pointer" }} />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`} className="text-">
                Read More
              </Link>{" "}
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex text-muted">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning"/>}
            fullSymbol={<FaStar />}
            >
            </Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
