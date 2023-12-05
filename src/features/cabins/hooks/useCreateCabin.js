import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createEditCabin } from "../../../services/apiCabins";

// Manage and controll queries using react-query...

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      //   reset(); // this will reset the form once cabin is successfully created...
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
