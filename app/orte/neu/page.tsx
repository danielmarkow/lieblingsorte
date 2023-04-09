"use client";

import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const neuerOrtSchema = z.object({
  description: z.string().min(100),
  activities: z.string(),
  lastVisited: z.date(),
  longitude: z.number(),
  latitude: z.number(),
});

type FormValues = {
  description: string;
  activities: string;
  lastVisited: Date;
  longitude: number;
  latitude: number;
};

export default function NeuerOrt() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(neuerOrtSchema),
  });

  return (
    <>
      <p>neu</p>
    </>
  );
}
