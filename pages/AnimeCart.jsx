import React, { useState ,useEffect} from 'react'
import Link from 'next/link';
import { getData } from './api/hello';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setSlice } from '@/State/AnimeSlice';
export const AnimeCart = () => {
  const dispatch=useDispatch();
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getData().then(animes=>dispatch(setSlice({
      animes:animes,
      title:"Upcomming and released animes of this season"
    })));
    setLoading(false)
  },[])
  const state=useSelector(state=>state.Animes)
  if(isLoading)return <h2 className="text-2xl text-white text-center mb-2">loadin</h2>
  return (
    <>
      <h2 className="text-2xl text-white text-center mb-2">{state.title}</h2>
      <div className="sm:w-[90%] gap-2 w-full mx-auto justify-center flex flex-wrap ">
      {
        state.animes.map((item,key)=>{
          return(
            <>
              <Link href={
                {
                  pathname:`/${key}`,
                  query:{
                    key:key,
                    malId:item.mal_id
                  }
                }
              }
              as={`/${key}`}
              >
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