import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      // Check if user or user.email is available
      if (!user?.email) {
        return false; // Or return null/undefined depending on your logic
      }
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
    enabled: !!user?.email, // Only run the query if user.email exists
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
