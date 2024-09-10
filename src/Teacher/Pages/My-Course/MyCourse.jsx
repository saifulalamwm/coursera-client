import React from "react";
import useMyCourse from "../../../Hooks/useMyCourse";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCourse = () => {
  const [myCourse, refetch] = useMyCourse();

  myCourse;
  const handleDeleteCourse = (id) => {
    id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/mtCourses/${id}`)
          .then((res) => {
            res.data;
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "success",
                text: `Course has been deleted`,
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => {
            err;
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto rounded-xl mt-5">
      <table className="table">
        {/* head */}
        <thead className="bg-cyan-700 text-white">
          <tr>
            <th className="text-center">
              <p>Index</p>
            </th>
            <th>Course Title</th>
            <th>Details</th>
            <th className="text-center">Edit Course</th>
            <th className="text-center">Delete Course</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myCourse.map((course, index) => (
            <tr key={index}>
              <th className="text-center">{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={course.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{course.title}</div>
                    <div className="text-sm opacity-50">{course.postedBy}</div>
                  </div>
                </div>
              </td>
              <td>
                {course.category}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {course.price}
                </span>
              </td>
              <td className="text-center text-green-600 text-2xl">
                <Link to={`/admin/update-course/${course._id}`}>
                  <button>
                    <FaEdit />
                  </button>
                </Link>
              </td>
              <td
                onClick={() => handleDeleteCourse(course._id)}
                className="text-center text-red-600 text-2xl"
              >
                <button>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCourse;
