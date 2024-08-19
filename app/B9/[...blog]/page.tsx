"use client"
import React from 'react'
import { data } from '../page'

export default function page() {
  const blogs = "lập-trình-cơ-bản-c++"

  const titleFromSlug = blogs
    .split('-') // Tách chuỗi bằng dấu gạch ngang
    .join(' ') // Nối các từ lại bằng dấu cách
  const post = data.find((item: any) => item.title === titleFromSlug);
  return (
    <div>
        <p>Id: {post?.id}</p>
        <p>Title: {post?.title}</p>
    </div>
  )
}
