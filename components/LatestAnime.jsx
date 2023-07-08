import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSlice } from '@/State/AnimeSlice';
import { getData } from '@/pages/api/hello';
import Image from 'next/image';
const LatestAnime = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    const data=getData().then(animes=>dispatch(setSlice({
      animes:animes,
      title:"Upcomming and released animes of this season"
    })));
  },[])
  const animes=useSelector(state=>state.Animes.animes);
  return (
    <>
        <h3 className='text-slate-800 bg-yellow-300  my-2 p-2 text-lg'>Latest Animes</h3>
        <div  className='h-52 flex   overflow-x-scroll no-scrollbar gap-2 '>
          {
            animes?.map((anime,key)=>{
              return(
                <>
                <div key={key} className=" h-full text-white flex-shrink-0 relative w-36">
                  <Image
                  src={anime.images?.webp?.image_url}
                  fill={true}
                  alt='cover'
                  className='absolute object-cover'
                  />
                </div>
            </>
              )
            })
          }
        </div>
    </>
  )
}

export default LatestAnime