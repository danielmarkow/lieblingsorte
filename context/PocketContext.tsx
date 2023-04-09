"use client";
import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PocketBase from "pocketbase";
import type { RecordAuthResponse, Admin, Record } from "pocketbase";
import { useQuery } from "@tanstack/react-query";

type ContextType = {
  registerUser: (email: string, password: string) => Promise<Record>;
  login: (
    email: string,
    password: string
  ) => Promise<RecordAuthResponse<Record>>;
  logout: () => void;
  user: Record | Admin | null;
  // setUser: Dispatch<SetStateAction<Record | Admin | null>>;
  token: string;
  pb: PocketBase;
};

const PocketContext = createContext<ContextType>({
  registerUser: () => new Promise(() => ""),
  login: () => new Promise(() => ""),
  logout: () => {},
  user: null,
  // setUser: () => "",
  token: "",
  pb: new PocketBase(),
});

export const PocketProvider = ({ children }: { children: React.ReactNode }) => {
  const pb = useMemo(
    () => new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL),
    []
  );

  const [token, setToken] = useState(pb.authStore.token);
  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    });
  }, [pb.authStore]);

  const registerUser = async (email: string, password: string) => {
    return await pb.collection("users").create({
      email,
      password,
      passwordConfirm: password,
    });
  };

  const login = async (email: string, password: string) => {
    return await pb.collection("users").authWithPassword(email, password);
  };

  const logout = () => {
    return pb.authStore.clear();
  };

  useQuery({
    queryKey: ["users", "refreshSession"],
    queryFn: async () => await pb.collection("users").authRefresh(),
    enabled: !pb.authStore.isValid && token !== "",
    refetchInterval: 600000,
    refetchIntervalInBackground: true,
    onSuccess: () => {
      console.log("refreshed token");
    },
  });

  return (
    <PocketContext.Provider
      value={{ registerUser, login, logout, user, token, pb }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
