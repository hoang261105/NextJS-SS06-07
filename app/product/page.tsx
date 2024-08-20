"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Product {
  name: string;
  category: string;
}

export default function B3() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState<Product>({
    name: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
  };

  const handleClicks = () => {
    router.push(`/product?name=${encodeURIComponent(inputValue.name)}&category=${encodeURIComponent(inputValue.category)}`)
  }
  return (
    <div>
      <b>Tên sản phẩm: {inputValue.name}</b> <br />
      <b>Danh mục: {inputValue.category}</b> <br />
      <input
        type="text"
        placeholder="Tìm kiếm theo tên"
        style={{ border: "0.5px solid darkgray" }}
        onChange={handleChange}
        name="name"
      />{" "}
      <br /> <br />
      <input
        type="text"
        placeholder="Tìm kiếm theo danh mục"
        style={{ border: "0.5px solid darkgray" }}
        onChange={handleChange}
        name="category"
      />{" "}
      <br /> <br />
      <button onClick={handleClicks}>Tìm kiếm</button>
    </div>
  );
}
