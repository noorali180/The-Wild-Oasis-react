import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../../../services/apiSettings";

export function useSetting() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetting,
  });

  return { isLoading, error, settings };
}
