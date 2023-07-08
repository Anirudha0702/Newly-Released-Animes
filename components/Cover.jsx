import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
const getRandomAnime=async()=>{
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_API}/random/anime`)
    if(!res.ok){
        console.log("error")
    }
    else{
        const anime=await res.json()
        console.log("done")
        return anime.data
    }
    } catch (error) {
        console.log(error)
    }
}
const Cover = () => {
const [randomAnime,setRandomAnime]=useState({})
useEffect(()=>{
    const anime=getRandomAnime().then(data=>setRandomAnime(data))
},[])
console.log(randomAnime)
  return (
    <div className='mt-2  relative w-full h-[60svh]'>
        <Image
        src={randomAnime.images?.webp?.large_image_url
        }
        alt={"anime Cover"}
        fill={true}
        className='absolute  object-cover'
            />
        <div className="flex flex-col relative w-1/2 bg-green-600">

            <span className='text-3xl text-white font-bold'>{randomAnime.title}</span>
        </div>
        {/* <Link 
        href={"./details"}>
        <button className='absolute bottom-2 right-2 text-white bg-red-400 z-10 w-20 h-10 rounded-lg'>More Info</button>
        </Link> */}
    </div>
  )
}

export default Cover