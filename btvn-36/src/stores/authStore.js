import { create } from "zustand";

export const useAuth = create((set) => {
  return {
    token: localStorage.getItem("access_token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    login: async (email, password) => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
          throw new Error("lỗi fetch api");
        }
        const token = await res.json();
        localStorage.setItem("access_token", token.access_token);
        localStorage.setItem("refresh_token", token.refresh_token);
        set({ token: token.access_token });
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    },
    getUserProfile: async () => {
      try {
        const res = await fetch(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        if (!res.ok) throw new Error("lỗi fetch api");
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        set({ user: user });
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    },
    logout: () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
      set({
        token: null,
        user: null,
      });
    },
  };
});
