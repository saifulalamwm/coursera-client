import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMyCourse = () => {
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: myCourse = [], refetch } = useQuery({
    queryKey: ["myCourse", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/myCourses?teacherEmail=${user.email}`
      );
      return res.data;
    },
  });

  return [myCourse, refetch];
};

export default useMyCourse;
