import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, title, postedBy, image, price, description, totalEnrolment } =
    course;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="font-semibold text-blue-500">{postedBy}</p>
        <p>${price}</p>
        <Link to={`/courses/${_id}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
