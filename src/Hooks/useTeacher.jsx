import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useTeacher = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isTeacher, isLoading: isTeacherLoading } = useQuery({
    queryKey: [user?.email, "isTeacher"],
    queryFn: async () => {
      // Guard clause to check if user or user.email is available
      if (!user?.email) {
        return false; // Return false or whatever suits your logic
      }
      const res = await axiosSecure.get(`/teachers/teacher/${user.email}`);
      return res.data?.isTeacher;
    },
    enabled: !!user?.email, // Query only runs when user.email is available
  });

  return [isTeacher, isTeacherLoading];
};

export default useTeacher;
