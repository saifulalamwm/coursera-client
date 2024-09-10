import React from "react";
import useUsers from "../../Hooks/useUsers";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAdmin from "../../Hooks/useAdmin";

const AllUser = () => {
  const [students, refetch] = useUsers();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => {});
      }
    });
  };

  const handleMakeAdmin = (student) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${student._id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "success",
                text: `${student.name} is an admin now`,
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => {});
      }
    });
  };

  return (
    <div className="w-11/12 m-auto">
      <div className="stats stats-vertical lg:stats-horizontal shadow flex mt-5 ">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{students.length}</div>
        </div>
      </div>
      <div className="">
        <div className="overflow-x-auto rounded-lg mt-10">
          <table className="table table-zebra ">
            {/* head */}
            <thead className="bg-blue-500 text-white ">
              <tr>
                <th>SL</th>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>User Type</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {students.map((student, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    {student.role === "admin" ? (
                      <button className="btn bg-green-600 text-white">
                        Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(student)}
                        className="btn bg-yellow-500 text-white"
                      >
                        {"student"}
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(student._id)}
                      className="text-white btn bg-red-500"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
