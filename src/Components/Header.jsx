import { Link, NavLink } from "react-router-dom";
import Login from "../Users/Pages/Login/Login";
import Register from "../Users/Pages/Register/Register";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBars, FaUser } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  // nav links for users
  const NavLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/courses"}>Courses</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-10 top-0 w-11/12 m-auto shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <img
              className="w-40"
              src="/src/assets/images/Coursera-Logo-text.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>

        {/* Header Last part */}

        <div className="navbar-end ">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <button className="text-2xl p-1 w-12 h-12 flex justify-center items-center rounded-full bg-gray-300">
                  {user && user.photoURL ? (
                    <img
                      className="rounded-full"
                      src={user && user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaUser />
                  )}
                </button>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-96 p-2 shadow"
              >
                <li>
                  <div className=" flex gap-2">
                    <div className="text-2xl p-1 w-14 h-14 flex justify-center items-center rounded-full bg-blue-500">
                      {user && user.photoURL ? (
                        <img
                          className="rounded-full  "
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <FaUser className="text-white" />
                      )}
                    </div>
                    <div className="grid grid-cols-1">
                      <p>{user?.displayName}</p>
                      <p className="text-blue-500">{user?.email}</p>
                    </div>
                  </div>
                </li>
                <div className="divider"></div>
                <li className="my-2">
                  <NavLink to={"my-learning"}>
                    <div className="flex w-full gap-3">
                      <FaComputer className="text-2xl text-blue-500" />
                      <p>User Dashboard</p>
                    </div>
                  </NavLink>
                </li>
                <div className="divider"></div>
                <Link to={"/login"}>
                  <button
                    onClick={handleLogout}
                    className="text-white btn font-semibold  bg-red-500 m-auto "
                  >
                    Sign Out
                  </button>
                </Link>
              </ul>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn w-20 text-blue-800 font-semibold">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="btn w-22 border-2 border-blue-500 text-blue-800">
                  Join for free
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
