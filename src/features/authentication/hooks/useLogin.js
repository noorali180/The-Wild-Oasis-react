import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "../../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success("User successfully logged in");
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Provided email or password is not correct");
    },
  });

  return { login, isLoading };
}
