import React, { useState } from "react";
import userLoadTeachers from "../../Hooks/userLoadTeachers";
import { Link } from "react-router-dom";
import { FaTrash, FaUser } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const TeachersList = () => {
  const [teachers, refetch] = userLoadTeachers();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  //   const [isTeacher, setIsTeacher] = useState(false);

  teachers;

  const handleMakeTeacher = (teacher) => {
    teacher;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make teacher",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/teachers/${teacher}`)
          .then((res) => {
            res.data;
            if (res.data.modifiedCount > 0) {
              setIsTeacher(true);
              Swal.fire({
                title: "success",
                text: `Is an teacher now`,
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
    <div className="">
      <div className="overflow-x-auto rounded-xl">
        <table className="table">
          {/* head */}
          <thead className="bg-cyan-700 text-white">
            <tr>
              <th className="text-center">
                <p>Index</p>
              </th>
              <th>Teacher info</th>
              <th>Roll & Apply</th>
              <th className="text-center">Make Teacher</th>
              <th className="text-center">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {teachers?.map((teacher, index) => (
              <tr key={index}>
                <th className="text-center">{index + 1}</th>
                <td className="">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={teacher.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{teacher.teacherName}</div>
                      <div className="text-sm opacity-50">
                        {teacher.teacherEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  {teacher.role}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {teacher.applyDate}
                  </span>
                </td>
                <td className="text-center ">
                  {teacher.role === "teacher" ? (
                    <button disabled={true}>
                      <GiTeacher className="text-2xl  text-green-600" />
                    </button>
                  ) : (
                    <button onClick={() => handleMakeTeacher(teacher._id)}>
                      <FaUser className="text-2xl  text-yellow-600" />
                    </button>
                  )}
                </td>
                <td
                  //   onClick={() => handleDeleteCourse(course._id)}
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
    </div>
  );
};

export default TeachersList;
