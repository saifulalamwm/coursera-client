import React, { useState } from "react";

import teacher from "../../../assets/images/banner2/teacher.jpg";
import abc from "../../../assets/images/OthersImage/user.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ApplyTeacher = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const date = new Date().toLocaleDateString("en-GB");

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    imageFile;

    //post image to imageBB
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    res.data;
    imageFile;
    // .then((res) => {
    //   (res.data);
    if (res.data.success) {
      const teacherInfo = {
        teacherName: data.teacherName,
        teacherEmail: data.teacherEmail,
        teacherPhone: data.teacherPhone,
        expertLevel: data.expertLevel,
        expertize: data.expertize,
        image: res.data.data?.display_url,
        applyDate: date,
        role: "student",
      };
      axiosSecure.post("/teachers", teacherInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Thank you",
            text: "You have apply for teacher",
            icon: "success",
          });
        }
        if (!res.data.insertedId) {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: `${user?.email} already apply for teacher`,
            footer: '<a href="#">Thank you for apply for teacher</a>',
          });
        }
        res.data.insertedId;
      });
    }
    // });

    data;
  };

  return (
    <div className="mt-20">
      <div
        className="hero  mt-20"
        style={{
          backgroundImage: `url(${teacher})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to the Teacher world
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-5 lg:w-1/2 m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*  */}
            <div className="grid grid-cols-2 gap-2">
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Name</span>
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    // disabled
                    type="text"
                    {...register("teacherName")}
                    placeholder="Enter your full name"
                    className="input input-bordered"
                    // required
                  />
                </div>
                {/*  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    // disabled
                    defaultValue={user?.email}
                    type="text"
                    {...register("teacherEmail")}
                    placeholder="Your email"
                    className="input input-bordered"
                    // required
                  />
                </div>
                {/*  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    {...register("teacherPhone")}
                    placeholder="Enter your phone number"
                    className="input input-bordered"
                    // required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 justify-center items-center ">
                <div className="flex justify-center">
                  <img className="w-40 rounded-lg" src={abc} alt="" />
                </div>
                <div className="">
                  <input
                    type="file"
                    {...register("image")}
                    className="file-input file-input-bordered w-full max-w-xs mt-3"
                  />
                </div>
              </div>

              {/* {user?.photoURL ? (
                <div className="flex justify-center">
                  <img
                    className="w-60 p-5 rounded-lg"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 justify-center items-center ">
                  <div className="flex justify-center">
                    <img className="w-40 rounded-lg" src={imageNew} alt="" />
                  </div>
                  <div className="">
                    <input
                      type="file"
                      {...register("image")}
                      onChange={handleFileChange}
                      className="file-input file-input-bordered w-full max-w-xs mt-3"
                    />
                  </div>
                </div>
              )} */}
              {/* {user && user.photoURL (

                           ) : (
                              
              )} */}
            </div>

            <div className=" grid grid-cols-2 gap-2">
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Expert In</span>
                </label>
                <select
                  {...register("expertize")}
                  className="input input-bordered"
                >
                  <option value="React">React</option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                  <option value="C++">C++</option>
                  <option value="Machine Learning">Machine Learning</option>
                </select>
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Expert Level</span>
                </label>
                <select
                  {...register("expertLevel")}
                  className="input input-bordered"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Experienced">Experienced</option>
                  <option value="Mid-level">Mid-level</option>
                </select>
              </div>
            </div>

            <div className="my-5 ">
              <button className="btn bg-cyan-600 text-white w-full text-2xl">
                I love teaching
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyTeacher;
