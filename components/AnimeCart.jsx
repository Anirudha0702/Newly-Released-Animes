import Image from 'next/image'
import React from 'react'
import {FaClosedCaptioning,FaClock} from 'react-icons/fa'
const AnimeCart = ({anime}) => {
  return (
    <div className='w-44  h-fit relative bg-green-800 sm:hover:scale-105 duration-150 ease-in-out transition'>
        <div className="h-60 relative w-full rounded-sm">
            <Image
            src={anime?.images?.jpg?.image_url}
            fill
            priority
            alt='Cover'
            blurDataURL='Image loading'
            className='absolute object-cover rounded-sm'
            />
             <span className='absolute bottom-2 left-2 w-16 bg-green-200 text-slate-700 flex justify-center items-center gap-1 rounded-sm'><FaClosedCaptioning /> {` ${anime?.episodes}`}</span>
        </div>
        <div className=" bg-slate-800">
           <h4 className="font-bold">{anime?.title?.slice(0,20)||anime?.title_english?.slice(0,20)}</h4>
           <div className="text-sm text-slate-400 flex justify-between">
            <span className='text-sm'>{anime?.type}</span>
            <span className='flex justify-center items-center gap-1 '>
                <FaClock/>
                {anime?.duration}
            </span>
           </div>
        </div>
    </div>
  )
}

export default AnimeCart