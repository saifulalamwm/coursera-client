import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useMyCourseEnrolled = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: myCourseEnrolled = [], refetch } = useQuery({
    queryKey: ["enroll", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/my-course-enrolled?teacherEmail=${user.email}`
      );
      return res.data;
    },
  });

  return [myCourseEnrolled, refetch];
};

export default useMyCourseEnrolled;
