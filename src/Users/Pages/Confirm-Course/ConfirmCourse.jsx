import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import { RxAvatar } from "react-icons/rx";
import CourseList from "../../../Admin/Manage-Courses/CourseList";
import paymentCover from "../../../assets/images/OthersImage/payment-cover.jpg";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import PaymentForm from "../Payments-user/PaymentForm";
import useEnroll from "../../../Hooks/useEnroll";

//to do add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const ConfirmCourse = () => {
  const { id } = useParams();
  const [enroll, refetch] = useEnroll();
  const { user } = useAuth();

  const makeConfirm = enroll?.find((enrollCourse) => enrollCourse._id === id);

  if (!makeConfirm) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  const { title, studentEmail, teacherEmail, image, price } = makeConfirm;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="my-20 ">
      <div
        style={{
          backgroundImage: `url(${paymentCover})`,
        }}
        className="bg-no-repeat bg-cover  bg-center w-full "
      >
        <p className="text-4xl font-bold text-center p-10  bg-black bg-opacity-50 text-white capitalize">
          Your trusted payment system
        </p>
      </div>
      <br />
      <div className="grid gap-5 lg:grid-cols-2 m-auto">
        <div className="grid items-center justify-center">
          <div className="card card-compact bg-base-100 shadow-xl lg:w-72">
            <figure>
              <img className="" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>By :{teacherEmail} </p>
              <p>${price}</p>
              <p className="font-semibold text-blue-500">{user?.displayName}</p>
              <p className="font-semibold text-blue-500">{studentEmail}</p>
              <p className="font-semibold text-blue-500">{formattedDate}</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-600 grid justify-center items-center rounded-lg h-full p-5">
          <Elements stripe={stripePromise}>
            <PaymentForm makeConfirm={makeConfirm} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCourse;
