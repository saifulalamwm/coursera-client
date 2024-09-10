import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
  const axiosPublic = useAxiosPublic();
  const { data: coursesList = [], refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");
      return res.data;
    },
  });

  return [coursesList, refetch];
};

export default useCourses;
