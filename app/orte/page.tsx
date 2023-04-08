"use client";

import { usePocket } from "@/context/PocketContext";
import type { Admin, Record } from "pocketbase";

import { useEffect, useState } from "react";

export default function Orte() {
  const { user } = usePocket();

  const [userState, setUserState] = useState<Record | Admin | null>(null);

  useEffect(() => {
    setUserState(user);
  }, [user]);

  return (
    <div>
      <p>Orte</p>
      {userState && <p>geheime Orte</p>}
    </div>
  );
}
