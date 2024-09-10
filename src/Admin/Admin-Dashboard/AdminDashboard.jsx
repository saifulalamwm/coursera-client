import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import {
  FaBars,
  FaDiceFive,
  FaDiceSix,
  FaEnvelope,
  FaHome,
  FaMoneyBill,
  FaThList,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { BsMortarboardFill, BsMotherboard } from "react-icons/bs";
import { SiCoursera } from "react-icons/si";
import { HiComputerDesktop } from "react-icons/hi2";
import { BiSolidFoodMenu } from "react-icons/bi";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(true);

  return (
    <div className="max-w-screen m-auto  flex  h-screen overflow-hidden">
      {/* Sidebar Menu */}
      <div
        className={` relative transition-all duration-500 ease-in-out h-screen ${
          open ? "w-52" : "w-10"
        } overflow-hidden fixed h-full`}
      >
        <div className="flex flex-col h-full  justify-between ">
          <div className="flex-grow">
            {/* Top part */}
            <div className="mt-5">
              <img className="w-full" src={user.photoURL} alt="" />
            </div>
            <div
              className={`pl-2 grid gap-2 ${
                open ? "w-52" : "scale-0 duration-700"
              }`}
            >
              <p className="text-xl font-bold">{user.displayName}</p>
              <p className="flex gap-2 items-center text-xs">
                <FaEnvelope />
                {user.email}
              </p>
            </div>
            <div className="divider"></div>
            <div className="">
              <ul>
                <li>
                  <NavLink to={"admin-home"}>
                    <div
                      className={`flex items-center gap-2 w-11/12 m-auto my-2 ${
                        !open && "justify-center"
                      } `}
                    >
                      <div className="text-xl text-cyan-600 ">
                        <BsMortarboardFill
                          className={`${!open && "text-3xl duration-700"}`}
                        />
                      </div>
                      <div className={`${!open && "hidden"} text-sm`}>
                        <p>Admin Home</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"all-users"}>
                    <div
                      className={`flex items-center gap-2 w-11/12 m-auto my-2 ${
                        !open && "justify-center"
                      } `}
                    >
                      <div className="text-xl text-cyan-600">
                        <FaUsers
                          className={`${!open && "text-3xl duration-700"}`}
                        />
                      </div>
                      <div className={`${!open && "hidden"} text-sm`}>
                        <p>All User</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"manage-courses"}>
                    <div
                      className={`flex items-center gap-2 w-11/12 m-auto my-2 ${
                        !open && "justify-center"
                      } `}
                    >
                      <div className="text-xl text-cyan-600">
                        <SiCoursera
                          className={`${!open && "text-3xl duration-700"}`}
                        />
                      </div>
                      <div className={`${!open && "hidden"} text-sm`}>
                        <p>Add Course</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"course-list"}>
                    <div
                      className={`flex items-center gap-2 w-11/12 m-auto my-2 ${
                        !open && "justify-center"
                      } `}
                    >
                      <div className="text-xl text-cyan-600">
                        <FaThList
                          className={`${!open && "text-3xl duration-700"}`}
                        />
                      </div>
                      <div className={`${!open && "hidden"} text-sm`}>
                        <p>Manage Course</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"payments"}>
                    <div
                      className={`flex items-center gap-2 w-11/12 m-auto my-2 ${
                        !open && "justify-center"
                      } `}
                    >
                      <div className="text-xl text-cyan-600">
                        <FaMoneyBill
                          className={`${!open && "text-3xl duration-700"}`}
                        />
                      </div>
                      <div className={`${!open && "hidden"} text-sm`}>
                        <p>Payment History</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
              <div className="divider border-white border-b-2"></div>
              <ul>
                <li>
                  <NavLink to={"teachers"}>
                    <div
                      className={`flex items-center gap-2 w-11/12 m-auto my-2 ${
                        !open && "justify-center"
                      } `}
                    >
                      <div className="text-xl text-cyan-600">
                        <BsMotherboard
                          className={`${!open && "text-3xl duration-700"}`}
                        />
                      </div>
                      <div className={`${!open && "hidden"} text-sm`}>
                        <p>Manage Teachers</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>

              <div className="divider border-white border-b-2"></div>
            </div>
          </div>
          <div className=" flex justify-evenly items-center flex-wrap bg-cyan-800 gap-3 py-2">
            <Link to={"/"}>
              <FaHome className="text-2xl text-white" />
            </Link>
            <Link to={"/courses"}>
              <BiSolidFoodMenu className="text-2xl text-white" />
            </Link>
            <Link to={"/my-learning"}>
              <HiComputerDesktop className="text-2xl text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`relative flex-1 px-3 ml-${
          open ? "64" : "0"
        } transition-all duration-500 ease-in-out h-full overflow-y-auto`}
      >
        <div className="mt-2 sticky top-0 z-10 bg-white ">
          <FaBars
            onClick={() => setOpen(!open)} // Toggle state to show/hide menu
            className="text-4xl cursor-pointer mb-5"
          />
        </div>
        {/* ///////////////////////// Main content /////////////////////////////////// */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
