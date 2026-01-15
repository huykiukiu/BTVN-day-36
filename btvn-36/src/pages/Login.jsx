import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../stores/authStore";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const ref = useRef();
  const { token } = useAuth();
  const continueUrl = searchParams.get("continue") ?? "/";
  const navigate = useNavigate();
  const requestLogin = useAuth((state) => state.login);
  const handleClick = () => {
    ref.current.innerText = "Loading...";
  };
  const handleChangeValueEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleChangeValuePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await requestLogin(email, password);
    navigate(`${continueUrl}`);
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto mt-5 flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="border px-2"
            type="email"
            placeholder="Email..."
            onChange={handleChangeValueEmail}
          />
        </div>
        <div>
          <input
            className="border px-2"
            type="password"
            placeholder="Password..."
            onChange={handleChangeValuePassword}
          />
        </div>
        <button
          className="border bg-red-500 text-white px-2 rounded-sm cursor-pointer"
          ref={ref}
          onClick={handleClick}
        >
          Login
        </button>
      </form>
    </div>
  );
}
