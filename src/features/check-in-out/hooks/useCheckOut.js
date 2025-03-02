import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut() {
  const queryClient = useQueryClient();

  const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) => {
      return updateBooking(bookingId, {
        status: "checked-out",
      });
    },
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      // it will invalidate all the cached queries...
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      console.error(error);
      toast.error(`There was an error while checking out`);
    },
  });

  return { checkOut, isCheckingOut };
}
