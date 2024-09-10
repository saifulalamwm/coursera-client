import useCourses from "../../Hooks/useCourses";
import userLoadTeachers from "../../Hooks/userLoadTeachers";
import useUsers from "../../Hooks/useUsers";

const AdminHome = () => {
  const [students] = useUsers();
  const [courseList] = useCourses();
  const [teachers] = userLoadTeachers();

  return (
    <div className="">
      <div className="flex gap-5 flex-wrap justify-center w-full ">
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Total Courses</div>
            <div className="stat-value">{courseList.length}</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">
              <p>{students?.length}</p>
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Total Teacher</div>
            <div className="stat-value">
              <p>{teachers?.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default AdminHome;
