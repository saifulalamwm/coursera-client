import React, { useState } from "react";
import { FaBars, FaBook, FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import userLoadTeachers from "../../Hooks/userLoadTeachers";
import useAuth from "../../Hooks/useAuth";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { FaComputer } from "react-icons/fa6";
import {
  MdMenuBook,
  MdOpenInNew,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { BiSolidFoodMenu } from "react-icons/bi";

const TeacherDashboard = () => {
  const [open, setOpen] = useState(true); // State to toggle the menu visibility
  const teachersData = useLoaderData();

  const { user } = useAuth();

  const getTeacher = teachersData?.find(
    (teacher) => teacher?.teacherEmail === user.email
  );

  const {
    teacherName,
    teacherPhone,
    teacherEmail,
    image,
    expertLevel,
    expertize,
    applyDate,
    role,
  } = getTeacher;

  return (
    <div className="max-w-screen m-auto  flex  h-screen overflow-hidden">
      {/* Sidebar Menu */}
      <div
        className={` relative transition-all duration-500 ease-in-out h-screen ${
          open ? "w-64" : "w-0"
        } overflow-hidden fixed h-full`}
      >
        <div className="flex flex-col h-full  justify-between ">
          <div className="flex-grow">
            <div className="">
              <img src={image} alt="" />
            </div>
            <div className="pl-2 grid gap-2">
              <p className="text-xl font-bold">{teacherName}</p>
              <p className="flex gap-2 items-center text-xs">
                <FaEnvelope />
                {teacherEmail}
              </p>
              <p className="flex gap-2 items-center text-xs">
                <FaPhone />
                {teacherPhone}
              </p>
            </div>
            <div className="divider border-white border-b-2"></div>
            <div className="">
              <ul>
                <Link to={"/teacher/my-course"}>
                  <li className="menu shadow">
                    <p className="flex gap-2 items-center ">
                      <MdMenuBook />
                      My Course
                    </p>
                  </li>
                </Link>
                <Link to={"/teacher/new-Course"}>
                  <li className="menu shadow">
                    <p className="flex gap-2 items-center ">
                      <MdOpenInNew />
                      New Course
                    </p>
                  </li>
                </Link>
                <Link to={"/teacher/my-course-enrolled"}>
                  <li className="menu shadow">
                    <p className="flex gap-2 items-center ">
                      <MdOutlineAssignmentTurnedIn />
                      My Course Enrolled
                    </p>
                  </li>
                </Link>
                <Link to={"/teacher/assignment"}>
                  <li className="menu shadow">
                    <p className="flex gap-2 items-center ">
                      <MdOutlineAssignmentTurnedIn />
                      Assignment
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className=" flex justify-evenly items-center bg-cyan-800 h-10">
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

export default TeacherDashboard;
