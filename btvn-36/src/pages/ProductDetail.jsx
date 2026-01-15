import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="max-w-[1200px] mx-auto mt-5">
      <h1>ProductsDetail: {id}</h1>
      <button
        className="border cursor-pointer px-2 rounded-full bg-blue-500 text-white hover:bg-red-500"
        onClick={() => navigate(`/users/order/${id}`)}
      >
        Đặt hàng
      </button>
    </div>
  );
}
