import { useRouter } from 'next/router'
import React from 'react'

 const Details = () => {
    const ro=useRouter();

  return (
    <div>Destail:{ro.query.data}</div>
  )
}
export default Details