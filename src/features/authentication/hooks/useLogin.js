import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "../../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success("User successfully logged in");
      navigate("/");
    },
    onError: () => {
      toast.error("User do not exist try to sign up please");
    },
  });

  return { login, isLoading };
}
