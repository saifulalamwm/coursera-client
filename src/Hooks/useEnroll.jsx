import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useEnroll = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: enroll = [], refetch } = useQuery({
    queryKey: ["enroll", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/enroll?studentEmail=${user.email}`);
      return res.data;
    },
  });

  return [enroll, refetch];
};

export default useEnroll;
