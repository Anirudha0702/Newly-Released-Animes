import Image from 'next/image';
import {AiFillStar} from "react-icons/ai"
import React, { useState } from 'react'
import noImage from "@/Assets/noImage.jpg"
import { useRouter } from 'next/router';
import {useSelector } from 'react-redux';
  export const getServerSideProps =async(context) => {
    const state_key=context.query.key;
    const anime_id=context.query.malId;
    const res_chars=await fetch(`${process.env.NEXT_PUBLIC_API}/anime/${anime_id}/characters`)
    const characters=await res_chars.json();
    return{
      props:{characters}
    }
  }
    
 const Details = ({characters}) => {
  const[open,setOpen]=useState(false)
  const state=useSelector(state=>state.Animes.animes);
  const router=useRouter();
  const anime=state[router.query.key]
  console.log(anime)
  return (
  <>
      {
        open?(
          <div className=' w-[90svw] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] md:w-[50svw] h-[80svh] bg-white z-10 p-2 flex flex-col items-center'>
            <div className="grid grid-cols-2 gap-2 h-[90%] overflow-y-scroll mx-auto w-full">   
                <span>Title: </span><span>{anime.title}</span>
                  <span>Type</span><span>{anime.type}</span>
                  <span>Episodes</span><span>{anime.episodes}</span>
                  <span>Status</span><span>{anime.status}</span>
                  <span>Aired</span><span>{`${anime.aired.prop.string}`}</span>
                  <span>Premired</span><span>{`${anime.season} ${anime.year}`}</span>
                  <span>Broadcast</span><span>{anime.broadcast.string}</span>
                  <span>Producers</span><span>{anime.producers.map((producer,key)=>producer.name)}</span>
                  <span>Licensors</span><span>{anime.licensors.map((licensor,key)=>licensor.name)}</span>
                  <span>Studios</span><span>{anime.studios.map((studio,key)=>studio.name)}</span>
                  <span>Source</span><span>{anime.source}</span>
                  <span>Genres</span><span>{anime.genres.map((genre,key)=>genre.name)}</span>
                  <span>Themes</span><span>{anime.themes.map((theme,key)=>theme.name)}</span>
                  <span>Demographcs</span><span>{anime.demographics.map((demographic,key)=>demographic.name)}</span>
                  <span>Duration</span><span>{anime.duration}</span>
                  <span>Rating</span><span>{anime.rating}</span>
            </div>
            <button className='bg-blue-400 w-24 rounded-lg p-2 text-white mt-3' onClick={()=>setOpen(false)}>Close</button>
          </div>
        ):""
      }
    <div className='min-h-[79svh] md:w-[90%] md:mx-auto text-white relative'>
      <h2 className='py-2 text-2xl'>{anime.title_english}</h2>
      <div className="flex gap-2">
        <div className="md:w-64 rounded-lg md:h-80 w-44 h-64 relative ">
          <Image
            src={anime.images.jpg.large_image_url}
            fill={true}
            alt='Anime Cover'
            className='absolute rounded-lg'
          />
        </div>
        <div className=" px-4 flex flex-wrap  flex-col gap-2 md:text-xl">
          <div className="flex items-center gap-1  h-fit"> 
            <AiFillStar className='text-yellow-300 '/>
            <span className='text-xl '>{anime.score}</span><span className='text-xs text-gray-200'>{`(${anime.scored_by} users) `}</span>
          </div>
          <span>Ranked {`#${anime.rank}`}</span>
          <span>{`${anime.type} (${anime.episodes})`}</span>
          <span>{`${anime.status} ${anime.season} ${anime.year}`}</span>
          <span>{`Studio: ${anime.studios[0].name}`}</span>
          <div className="w-fit h-11  flex text-sm gap-2">
          <button className='bg-blue-400 w-24 rounded-lg p-2 hover:bg-blue-600 duration-200 ease-in-out '>Add to List</button>
          <button onClick={()=>setOpen(true)} className='bg-blue-400 w-24 rounded-lg p-2 hover:bg-blue-600 transition duration-200 ease-in-out '>More Info</button>
          </div>
        </div>
        <div className="md:h-80 md:w-full w-44 h-64 relative hidden md:block">
          <iframe
           className='absolute w-full h-full max-w-[35rem] ml-10'
            src={anime.trailer?.embed_url}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title=""
          />
        </div>
      </div>
        <details className=''>
          <summary className='text-2xl my-4'>Synopsis</summary>
          <p className='md:px-0 px-2'>{anime.synopsis===null?'No Synopsis is Provided🥲🥲':anime.synopsis}</p>
        </details>
        <details className=''>
          <summary className='text-2xl my-4'>Background</summary>
          <p className='md:px-0 px-2'>{anime.background===null?'No Background is Provided🥲🥲':anime.background}</p>
        </details>
        <details className=''>
          <summary className='text-2xl my-4'>Characters and Voice Actors</summary>
          <div className={`w-full flex overflow-x-scroll h-40  text-white no-scrollbar md:flex-wrap md:h-fit gap-2  md:justify-between`}>
          {
            characters.data?.map((props,key)=>{
              return(
                <>
                <div key={key} className="relative flex-shrink-0 w-20 h-full md:flex md:w-[47%] md:h-fit  md:justify-between md:px-4 md:py-2 md:items-center  md:border-2 border-yellow-300 rounded-lg">
                  <div className="relative w-full h-1/2 md:h-24 md:w-20 ">
                    <Image
                    fill={true}
                    src={props.character?.images?.jpg?.image_url}
                    alt='Not available'
                    className='absolute object-cover'
                    />
                    <div className=" md:hidden absolute w-full h-4 bg-slate-800 bottom-0  text-center text-xs">
                    {props.character?.name.length>10?props.character?.name.slice(0,10):props.character?.name}
                    </div>
                    <div className="hidden md:flex flex-col absolute w-full h-4 bg-slate-800 left-[110%] text-sm top-[3%]">
                    <span className='text-lg text-yellow-300'>{props.character?.name}</span>
                    {props.role}
                    
                    </div>
                  </div>
                  <div className="relative w-full h-1/2 md:h-24 md:w-20">
                    <Image
                    fill={true}
                    src={props.voice_actors[0]?.person?.images?.jpg?.image_url||noImage}
                    alt='Not available'
                    className='absolute object-cover'
                    />
                    <div className="md:hidden absolute w-full h-4 bg-slate-800 bottom-0  text-center text-xs">
                    {props.voice_actors[0]?.person?.name.length>10?props.voice_actors[0]?.person?.name.slice(0,10):props.voice_actors[0]?.person?.name}
                    </div>
                    <div className=" md:flex flex-col hidden  absolute w-full h-4 bg-slate-800 right-[100%] top-[3%] text-sm">
                    <span className='text-lg text-yellow-300'>{props.voice_actors[0]?.person?.name}</span>
                    <span>{props.voice_actors[0]?.language}</span>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
          </div>
        </details>
    </div>
  </>
  )
}
export default Details