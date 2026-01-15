import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../stores/authStore";
export default function UsersLayout() {
  const { token, logout, user, getUserProfile } = useAuth();
  useEffect(() => {
    if (token && !user) {
      getUserProfile();
    }
  }, [user, token]);
  return (
    <>
      <div className="max-w-[1200px] mx-auto className={className} to min-h-15 flex items-center gap-10">
        <NavLink to={"/users"}>Dashboard</NavLink>
        <NavLink to={"/"}>Password</NavLink>
        <NavLink to={"/"}>Account</NavLink>
        <NavLink to={"/"}>My Order</NavLink>
        {user ? (
          <span className="italic font-mono text-pink-500">
            Hi {user.name} !
          </span>
        ) : (
          ""
        )}
        {token ? (
          <button
            className="border px-2 rounded-full cursor-pointer hover:bg-red-500 hover:text-white"
            onClick={logout}
            replace
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
      <hr />
      <Outlet />
    </>
  );
}
