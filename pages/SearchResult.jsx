import AnimeCart from '@/components/AnimeCart';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
export const getServerSideProps=async(context)=>{
    let searchResult;
    const key=context.query.search
   try {
    const res  =  await fetch(`${process.env.NEXT_PUBLIC_API}/anime?q=${key}&sfw`,{
      method:'GET'
    });
     const data =  await res.json();
    searchResult=data.data;
} catch (error) {
    console.log(error);
}
console.log(key)
   return{
    props:{searchResult,
    }
   } 
}
const SearchResult = ({searchResult}) => {
    const router=useRouter();
    const key=router.query.search
  return (
    <>
    <h3 className="text-white m-4 text-2xl"> {`${searchResult.length} search results for `}<i>{key}</i></h3>
    <div className='text-white min-h-[79svh] flex flex-wrap gap-2 md:w-[90%] mx-auto  justify-around'>
        {
            searchResult?.length==0?(
                <span>No data Found</span>
            ):(
                
                searchResult?.map((anime,key)=>{
                    return(
                        <Link href={
                            {
                                pathname:`/${anime?.mal_id}`,
                                query:{
                                  id:anime?.mal_id
                                }
                              }
                        }>
                            <AnimeCart anime={anime} key={key}/>
                        </Link>
                    )
                })
                
            )
        }
    </div>
    </>
  )
}

export default SearchResult