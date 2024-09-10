import { FaMoneyBill, FaUser, FaUsers } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { FaComputer } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const [isAdmin] = useAdmin();

  return (
    <div className="">
      <NavLink to={"admin/admin-home"}>
        <div className="flex w-full gap-3 ">
          <FaUsers className="text-2xl text-blue-500" />
          <p>Admin Dashboard</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Dashboard;
