"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function B1() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    console.log("Giá trị tìm kiếm", inputValue);
    router.push(`/posts?name=${encodeURIComponent(inputValue)}`)
  };
  return (
    <div>
      <b>Search Value: {inputValue}</b> <br />
      <input
        type="text"
        placeholder="Tìm kiếm"
        onChange={handleChange}
        name="inputValue"
        style={{ border: "1px solid black" }}
      />
      <button onClick={handleClick}>TÌm kiếm</button>
    </div>
  );
}
