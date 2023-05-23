"use client";
import React from "react";
import useUser from "@/hooks/useUser";
import useUserMustBeLogged from "@/hooks/useUserMustBeLogged";
import { addNewLink } from "@/utils/data";
import { useState, useEffect } from "react";
import AddList from "./AddList";

export default function Profile() {
  const { user, refreshUser, error, loading } = useUser();
  // we removed the useUser in the userMustBeLogged component, and now are supplying the user
  useUserMustBeLogged(user, "in", "/login");

  return (
    <div className="flex justify-center">
      <AddList />
    </div>
  );
}
