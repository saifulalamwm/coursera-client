import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePartners = () => {
  const axiosPublic = useAxiosPublic();
  const { data: partners = [], refetch } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const res = await axiosPublic.get("/partners");
      return res.data;
    },
  });

  return [partners, refetch];
};

export default usePartners;
