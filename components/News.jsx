import React,{useState,useEffect} from 'react'
import Link from 'next/link';
const getTrendings=async()=>{
    try {
        const res= await fetch(`${process.env.NEXT_PUBLIC_API}/top/anime`,
        { 
            method: 'GET',
            headers: { accept: 'application/json' }, 
        })
    if(!res.ok){
        console.log(res.status)
        throw new Error(res.status)
    }
    
        const trendings=await res.json()
        console.log(trendings)
        return trendings.data
    
    } catch (error) {
        console.log(error)
    }
}
const News = () => {
    const [trendings,setTrending]=useState([]);
    useEffect(() => {
        const res=getTrendings().then(news=>{setTrending(news)})
      },[])
      console.log(trendings)
  return (
  <>
    <h3 className='text-slate-800 bg-yellow-300  my-2 p-2 text-lg'>Trending Animes</h3>

    <div className="sm:w-[90%] gap-2 w-full mx-auto justify-center flex flex-wrap ">
    {
        trendings?.map((item,key)=>{
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
                <img className="absolute w-[100%] h-[100%]"src={item.images?.jpg?.large_image_url
} alt="" />
                </div>
                <div className="absolute w-full h-8 bg-yellow-300 bottom-0 rounded-t-lg text-center ">
                  {item?.title?.length>15?item.title.slice(0,15)+"...":item.title}
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

export default News