import React, { useState ,useEffect} from 'react'
import Link from 'next/link';
import { getData } from './api/hello';
import Image from 'next/image';
export const AnimeCart = () => {
  const [animeList,setAnimeList]=useState([]);

    useEffect(() => {
      getData().then(animes=>setAnimeList(animes));
    },[])
    
  return (
    <>
      <h2 className="text-2xl text-white text-center mb-2">Upcomming and released animes of this season</h2>
      <div className="sm:w-[90%] gap-2 w-full mx-auto justify-center flex flex-wrap ">
      {
        animeList.map((item,key)=>{
          return(
            <>
              <Link href={`/${item.mal_id}`}>
              <div className="relative w-40 h-56" key={key} >
                <div className="relative w-[100%] h-[100%]">
                <img className="absolute w-[100%] h-[100%]"src={item.images.jpg.large_image_url
} alt="" />
                </div>
                <div className="absolute w-full h-8 bg-yellow-300 bottom-0 rounded-t-lg text-center ">
                  {item.title.length>15?item.title.slice(0,15)+"...":item.title}
                </div>
              </div> 
              </Link>
            </>
          )
        })
      }
    </div>
    </>
  )
}
export default AnimeCart;