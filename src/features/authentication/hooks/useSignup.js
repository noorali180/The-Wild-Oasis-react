import toast from "react-hot-toast";
import { signup as apiSignup } from "../../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";

export function useSignup() {
  const {
    mutate: signup,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: apiSignup,
    onSuccess: () => {
      toast.success("user created successfully.");
    },
  });

  return { signup, isLoading, error };
}
