import useUserData from "hooks/api/services/useUserData";
import { createContext, ReactNode, useContext } from "react";
import { UserStates } from "types/user-types";

const UserContext = createContext({} as UserStates);

export const useUserContext = () => {
  return useContext(UserContext);
};

export default function UserContextProvider({ children }: { children: ReactNode }) {
  const { userData, userDataLoading, userDataError, fetchUserData } = useUserData({ immediate: true });

  const states = {
    userData,
    userDataLoading,
    userDataError,
    fetchUserData,
  };
  return <UserContext.Provider value={states as UserStates}>{children}</UserContext.Provider>;
}
