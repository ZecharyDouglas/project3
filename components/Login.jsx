"use client";
import React from "react";
import { loginUser } from "@/utils/data";
import useUserMustBeLogged from "@/hooks/useUserMustBeLogged";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useReducer } from "react";

export default function Login() {
  const { user } = useUser();
  useUserMustBeLogged(user, "out", "/profile");
  const router = useRouter();

  function reducer(state, action) {
    switch (action.type) {
      case "email":
      case "password":
        return { ...state, [action.type]: action.value };
      case "loading":
        return { ...state, loading: action.value };
      case "response":
        return { ...state, response: action.value };
    }

    throw Error("Unknown action." + action.type);
  }

  const initialState = {
    email: "",
    password: "",
    response: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, response, loading } = state;

  const login = async (e) => {
    dispatch({ type: "loading", value: true });
    dispatch({ type: "response", value: null });
    e.preventDefault();

    const response = await loginUser(email, password);

    dispatch({ type: "response", value: response });
    dispatch({ type: "loading", value: false });
    if (!!response?.success) {
      setTimeout(() => {
        router.replace("/profile");
      }, 3000);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      {response && (
        <div
          className={`${
            response.success
              ? "bg-green-200 border-2 border-green-800 text-green-800"
              : "bg-red-200 border-2 border-red-800 text-red-800"
          } py-2 px-5 my-10 text-center`}
        >
          <span className="font-bold">
            {response.success
              ? `Success ${response.message}`
              : `Failure: ${response.error.message}`}
          </span>
        </div>
      )}
      <h1 className=" flex justify-center text-lg mb-10">Login here!</h1>
      <div className="">
        <button
          onClick={login}
          className=" bg-slate-600 hover:text-white p-2 mb-10 w-[100px] rounded-md shadow-lg"
        >
          Login
        </button>
      </div>

      <div className="flex justify-center items-center mb-10">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => {
              dispatch({ type: "email", value: e.target.value });
            }}
            value={email}
            className="border-2 border-slate-900 rounded-lg shadow-md ml-3 w-[220px] px-2 h-[24px] mt-30"
          />
        </div>
        <div>
          <label htmlFor="password" className="ml-5">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              dispatch({ type: "password", value: e.target.value });
            }}
            value={password}
            className="border-2 text-lg border-slate-900 rounded-lg shadow-md ml-3 w-[220px] px-2 h-[24px] mt-30"
          />
        </div>
      </div>
    </div>
  );
}
