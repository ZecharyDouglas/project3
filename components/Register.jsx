"use client";
import React from "react";
import { useState } from "react";
import { registerUser } from "@/utils/data";
import { useRouter } from "next/navigation";
import useUserMustBeLogged from "@/hooks/useUserMustBeLogged";
import useUser from "@/hooks/useUser";

export default function Register() {
  const [name, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");

  const { user } = useUser();
  useUserMustBeLogged(user, "out", "/profile");
  const router = useRouter();

  const register = async (e) => {
    e.preventDefault();

    const response = await registerUser(
      userEmail,
      userPassword,
      name,
      username
    );
    if (!!response?.success) {
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border-black rounded-lg">
      <h2 className=" mb-10">Register Down Here!</h2>
      <form className="flex justify-center flex-col">
        <div className=" mb-5">
          <label htmlFor="name">Name* </label>
          <input
            type="text"
            className="text-lg rounded-lg border-2 border-red-500 ml-3"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="email">Email* </label>
          <input
            type="text"
            className="text-lg rounded-lg border-2 border-red-500 ml-3"
            value={userEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="username">Username* </label>
          <input
            type="text"
            className="text-lg rounded-lg border-2 border-red-500 ml-3"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="password">Password* </label>
          <input
            type="password"
            className="text-xl rounded-lg border-2 border-red-500 ml-3"
            value={userPassword}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={register}
          className="border-2 rounded-md border-black bg-zinc-800 p-1 hover:bg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
