import { createContext, useContext, ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryContext = createContext({});
export const useQueryContext = () => {
  return useContext(QueryContext);
};

const queryClient = new QueryClient();
export function QueryContextProvider({ children }: { children: ReactNode }) {
  return (
    <QueryContext.Provider value={{}}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </QueryContext.Provider>
  );
}
