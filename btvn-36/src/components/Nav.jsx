import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../stores/authStore";
import Loading from "../components/Loading";
export default function Nav() {
  const activeClass = ({ isActive }) => {
    return isActive ? "text-red-500 font-bold" : "";
  };
  const { token, logout, user, getUserProfile } = useAuth();
  useEffect(() => {
    if (token && !user) {
      getUserProfile();
    }
  }, [user, token]);
  return (
    <div className="max-w-[1200px] mx-auto className={className} to min-h-15 flex items-center gap-10">
      <NavLink className={activeClass} to={"/"} replace>
        Home
      </NavLink>
      <NavLink className={activeClass} to={"/about"} replace>
        About
      </NavLink>
      <NavLink className={activeClass} to={"/products"} replace>
        Products
      </NavLink>
      <NavLink className={activeClass} to={"/contact"} replace>
        Contact
      </NavLink>
      {token ? (
        ""
      ) : (
        <NavLink className={activeClass} to={"/login"} replace>
          Login
        </NavLink>
      )}
      {user ? (
        <span className="italic font-mono text-pink-500">Hi {user.name} !</span>
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
  );
}
