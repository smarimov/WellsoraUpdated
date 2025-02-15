// import settings from "@/config/settings"
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: settings.staleTime,
  //     refetchOnWindowFocus: false,
  //     retry: false
  //   }
  // }
});

export default queryClient;
