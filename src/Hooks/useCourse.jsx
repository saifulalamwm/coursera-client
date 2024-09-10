import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCourse = () => {
  const axiosPublic = useAxiosPublic();
  const { data: course = [], refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");
      return res.data;
    },
  });

  return [course, refetch];
};

export default useCourse;
