"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const data = [
  {
    id: 1,
    title: "Lập trình cơ bản C++",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHmPpA_46SFLpKbBsJb8bag-LFSL7bw_oNw&s",
  },
  {
    id: 2,
    title: "Lập trình Java core",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxVv6Y_5uTx2pJWo07agw5asXwwvRSPYkJg&s",
  },
  {
    id: 3,
    title: "Lập trình PHP",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png",
  },
  {
    id: 4,
    title: "Lập trình ReactJS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s",
  },
];

export default function B9() {
  const router = useRouter();

  const handleDetailClick = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/ /g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang

    router.push(`/B9/${slug}`);
  };

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <div className="item">
        {data.map((item: any) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} /> <br />
            <p>{item.title}</p>
            <button onClick={() => handleDetailClick(item.title)}>
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
