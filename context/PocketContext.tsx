"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PocketBase from "pocketbase";
import { useQuery } from "@tanstack/react-query";

const PocketContext = createContext({});

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
  }, []);

  const register = (email: string, password: string) => {
    return pb.collection("users").create({
      email,
      password,
      passwordConfirm: password,
    });
  };

  const login = (email: string, password: string) => {
    return pb.collection("users").authWithPassword(email, password);
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
    <PocketContext.Provider value={{ register, login, user, token, pb }}>
      {children}
    </PocketContext.Provider>
  );
};

export const usePocket = () => useContext(PocketContext);
