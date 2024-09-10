import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews = [],
    isLoading: reviewLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  return [reviews, refetch, reviewLoading];
};

export default useReviews;
