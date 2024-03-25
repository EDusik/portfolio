import React,{ createContext, ReactNode, useState } from "react";
import { IContextProps } from "./types/Context.types";
import { IProfile, IRepository } from "../types/types";

export const Context = createContext<IContextProps | undefined>(undefined);

type TContextProvider = {
  children: ReactNode;
  profile?: IProfile;
  repositories?: IRepository[];
  isLoading?: boolean;
  hasError?: boolean;
}

export const ContextProvider = ({ children, ...rest }: TContextProvider) => {
  const [profile, setProfile] = useState<any>(rest.profile ?? {});
  const [repositories, setRepositories] = useState<any[]>(rest.repositories ?? []);
  const [isLoading, setIsLoading] = useState<boolean>(rest.isLoading ?? true);
  const [hasError, setHasError] = useState<boolean>(rest.hasError ?? false);

  return (
    <Context.Provider
      value={{
        profile,
        repositories,
        isLoading,
        hasError,
        setProfile,
        setRepositories,
        setIsLoading,
        setHasError
      }}
    >
      {children}
    </Context.Provider>
  );
};