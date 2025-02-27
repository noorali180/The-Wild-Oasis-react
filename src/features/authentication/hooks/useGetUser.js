import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth";

export function useGetUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  console.log(user?.role, "user role");

  return {
    user,
    isLoading,
    error,
    isAuthenticated: user?.role === "authenticated" ? true : false,
  };
}
