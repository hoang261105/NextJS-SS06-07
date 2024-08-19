import React from 'react'
interface Props{
    params:any
}

export default function B8(props: Props) {
    const {params} = props
    console.log(1111,params);
    
  return (
    <div>Bạn đang xem blog với đường dẫn: {params.blog.join("/")}</div>
  )
}
