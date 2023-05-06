
import React, { useState ,useEffect} from 'react'
import style from "@/styles/Cart.module.css"
export const AnimeCart = () => {
  const [animeList,setAnimeList]=useState([]);
  const getData=async()=>{
    try {
      const res  =  await fetch("https://api.jikan.moe/v4/seasons/now");
       const data =  await res.json();
      setAnimeList(data.data)
      console.log(data.data[0]);
  } catch (error) {
      console.log(error);
  }
    }
    useEffect(() => {
      getData();
    },[])
    
  return (
    <>
      <h2 className={style.heading}>Upcomming and released animes of this season</h2>
      <div className={style.cart_wrapper}>
      {
        animeList.map((item,key)=>{
          return(
            <>
              <div className={style.cart} key={key}>
                <div className={style.img_wrapper}>
                <a href={item.url}><img className={style.img}src={item.images.jpg.large_image_url
} alt="" /></a>
                </div>
                <div className={style.details}>
                  {item.title.length>20?item.title.slice(0,21)+"...":item.title}
                </div>
              </div>
            </>
          )
        })
      }
    </div>
    </>
  )
}
export default AnimeCart;