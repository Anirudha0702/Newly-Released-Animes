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
  return (
    <div className='mt-2 md:w-[80%] border-2 border-slate-600 mx-auto p-2 grid sm:flex relative'>
        
        <div className="w-36 h-44 relative border-2 border-slate-800 shrink-0">
            <Image
            src={randomAnime.images?.webp?.image_url}
            alt={"anime Cover"}
            fill={true}
            className='absolute  block w-full'
            />
        </div>
        <div className=" flex flex-col p-2 gap-1">
            <span className="text-yellow-300 text-xl">{randomAnime.title?randomAnime.title:"name"}</span>
            <p className='text-yellow-400'><span className="text-slate-400 mr-2">Genres:</span>
            {
                randomAnime.genres?.map((genre,key)=>`${genre?.name},`)
            }
            </p>
            <p className="text-sm  text-slate-400">
                {
                    randomAnime.background!=null?randomAnime.background:"background is comming soon"
                }
            </p>
        </div>
        <Link 
        href={"./details"}>
        <button className='absolute bottom-2 right-2 text-white bg-red-400 z-10 w-20 h-10 rounded-lg'>More Info</button>
        </Link>
    </div>
  )
}

export default Cover