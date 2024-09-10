import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ManageCourses = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  image_hosting_api;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    imageFile;

    //post image to imageBB
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const courseItem = {
        title: data.title,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        postedBy: data.postedBy,
        teacherEmail: user.email,
        category: data.category,
        description: data.description,
        about: data.about,
        details: data.details,

        // title: data.title,
        // price: parseFloat(data.price),
        // image: res.data.data.display_url,
        // postedBy: data.postedBy,
        // teacherEmail: user.email,
        // category: data.category,
        // description: data.description,
        // about: data.about,
        // details: data.details,
      };
      data;

      data.courseItem;

      const courseRes = await axiosSecure
        .post("/courses", courseItem)
        .then((res) => {
          res.data;
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `your course list added`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      res.data;
    }
  };

  return (
    <div className="w-11/12 m-auto mt-1 h-screen">
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600  rounded-lg">
        <p className="text-4xl font-bold text-white text-center p-5">
          Add Your course
        </p>
      </div>
      <div className="w-full h-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Course Title</span>
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="Enter your course title"
              className="input input-bordered"
              // required
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Course Category</span>
              </label>
              <input
                type="text"
                {...register("category")}
                placeholder="Course price"
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Instructor</span>
              </label>
              <input
                type="text"
                {...register("postedBy")}
                placeholder="Enter instructor name"
                className="input input-bordered"
                // required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Course Price</span>
              </label>
              <input
                type="text"
                {...register("price")}
                placeholder="Course price"
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Short description</span>
              </label>
              <input
                type="text"
                {...register("description")}
                placeholder="Enter instructor name"
                className="input input-bordered"
                // required
              />
            </div>
          </div>

          <div className="">
            <label className="label">
              <span className="label-text font-bold">About Course</span>
            </label>
            <textarea
              placeholder="About course"
              {...register("about")}
              className="textarea textarea-bordered textarea-sm w-full "
            ></textarea>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text font-bold">Course Details</span>
            </label>
            <textarea
              placeholder="CourseDetails"
              {...register("details")}
              className="textarea textarea-bordered textarea-sm w-full"
            ></textarea>
          </div>
          <input
            type="file"
            {...register("image")}
            className="file-input file-input-bordered w-full max-w-xs mt-3"
          />
          <div className="">
            <button className="btn mt-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white  w-1/2">
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageCourses;
