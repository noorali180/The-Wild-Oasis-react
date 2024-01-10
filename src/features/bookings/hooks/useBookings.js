import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // 1. filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { name: "status", value: filterValue };

  // {name: 'totalPrice', value: 5000, method: 'gte'}

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  // Note: queryKey is just like the dependency array of useEffect hook...

  return { isLoading, error, bookings };
}
