import { createContext, useContext, ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQueryContext = createContext({});
export const useReactQueryContext = () => {
  return useContext(ReactQueryContext);
};

const queryClient = new QueryClient();
export function ReactQueryContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactQueryContext.Provider value={{}}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReactQueryContext.Provider>
  );
}
