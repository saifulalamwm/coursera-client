import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Users/Pages/Home/Home";
import Partners from "../Users/Pages/Partners/Partners";
import Courses from "../Users/Pages/Courses/Courses";
import Login from "../Users/Pages/Login/Login";
import Register from "../Users/Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import CourseDetails from "../Users/Pages/Courses/CourseDetails";
import MyLearning from "../Users/Pages/MyLearning/MyLearning";
import AdminHome from "../Admin/Admin-Home/AdminHome";
import Dashboard from "../Components/Dashboard";
import AdminDashboard from "../Admin/Admin-Dashboard/AdminDashboard";
import AllUser from "../Admin/All-User/AllUser";
import ManageCourses from "../Admin/Manage-Courses/ManageCourses";
import Payments from "../Admin/Accounts/Payments";
import AdminRoute from "./AdminRoute";
import CourseList from "../Admin/Manage-Courses/CourseList";
import UpdateCourse from "../Admin/Manage-Courses/UpdateCourse";
import ConfirmCourse from "../Users/Pages/Confirm-Course/ConfirmCourse";
import ApplyTeacher from "../Teacher/Pages/Apply-Teacher/ApplyTeacher";
import TeacherDashboard from "../Teacher/Pages/TeacherDashboard";
import TeachersList from "../Admin/Teacher/TeachersList";
import MyCourse from "../Teacher/Pages/My-Course/MyCourse";
import TeacherRoute from "./TeacherRoute";
import NewCourse from "../Teacher/Pages/New-Course/NewCourse";
import Assignment from "../Teacher/Pages/Assignment/Assignment";
import MyCourseEnrolled from "../Teacher/Pages/My-course-enrolled/MyCourseEnrolled";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://coursera-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/my-learning",
        element: (
          <PrivetRoute>
            <MyLearning />
          </PrivetRoute>
        ),
      },
      {
        path: "/apply-teacher",
        element: (
          <PrivetRoute>
            <ApplyTeacher />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-learning/:id",
        element: (
          <PrivetRoute>
            <ConfirmCourse />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "all-users",
        element: <AllUser />,
      },
      {
        path: "manage-courses",
        element: <ManageCourses />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "course-list",
        element: <CourseList />,
      },
      {
        path: "update-course/:id",
        element: <UpdateCourse />,
        loader: ({ params }) =>
          fetch(`https://coursera-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "teachers",
        element: <TeachersList />,
      },
    ],
  },
  {
    path: "teacher",
    element: (
      <TeacherRoute>
        <TeacherDashboard />
      </TeacherRoute>
    ),
    loader: () => fetch(`https://coursera-server.vercel.app/teachers`),
    children: [
      {
        path: "my-Course",
        element: <MyCourse />,
      },
      {
        path: "new-Course",
        element: <NewCourse />,
      },
      {
        path: "my-course-enrolled",
        element: <MyCourseEnrolled />,
      },
      {
        path: "assignment",
        element: <Assignment />,
      },
    ],
  },
]);
