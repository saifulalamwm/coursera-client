import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const usePayments = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: allPayments = [] } = useQuery({
    queryKey: ["allPayments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);
      return res.data;
    },
  });

  return [allPayments];
};

export default usePayments;
