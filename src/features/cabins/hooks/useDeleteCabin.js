import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  // accessing the query client...
  const queryClient = useQueryClient();

  // accessing the mutate function of useMutation to manipulate or change data...
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("Cabin successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
