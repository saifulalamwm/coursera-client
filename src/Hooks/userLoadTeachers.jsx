import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const userLoadTeachers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: teachers = [], refetch } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teachers");

      return res.data;
    },
  });
  return [teachers, refetch];
};

export default userLoadTeachers;
