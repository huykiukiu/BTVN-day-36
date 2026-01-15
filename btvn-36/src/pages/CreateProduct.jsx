import React from "react";
import { useParams } from "react-router-dom";

export default function CreateProduct() {
  const { id } = useParams();
  return (
    <div className="max-w-[1200px] mx-auto mt-5">
      <h1 className="text-3xl font-bold">Đặt hàng cho sản phẩm: {id}</h1>
    </div>
  );
}
