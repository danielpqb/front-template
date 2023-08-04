import useUserData from "external/hooks/api/services/useUserData";
import { createContext, ReactNode, useContext } from "react";
import { UserStates } from "./types";

const UserDataContext = createContext({} as UserStates);

export const useUserDataContext = () => {
  return useContext(UserDataContext);
};

export default function UserDataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { userData, userDataLoading, userDataError, fetchUserData } =
    useUserData({ immediate: true });

  const states = {
    userData,
    userDataLoading,
    userDataError,
    fetchUserData,
  };
  return (
    <UserDataContext.Provider value={states as UserStates}>
      {children}
    </UserDataContext.Provider>
  );
}
