import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: students = [], refetch } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");

      return res.data;
    },
  });

  // , {
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //       },
  //     }

  return [students, refetch];
};

export default useUsers;
