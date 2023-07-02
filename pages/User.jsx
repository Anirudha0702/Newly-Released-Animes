import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const User = () => {
    const session=useSession();
    const user=session.data?.user;
  return (
    <div className='p-2 min-h-[79svh] w-[90%]  mx-auto text-white relative flex justify-around items-center flex-wrap gap-4'>
        <div className="w-full sm:w-[35%]  h-[70svh] flex justify-center items-center flex-col gap-4 border-2 border-yellow-300 p-2 rounded-lg">
           <div className="group relative w-[50%] aspect-square outline-4 outline outline-yellow-300 rounded-xl">
            <div className=" hidden group-hover:block absolute top-0 w-full bg-slate-800 z-10 text-xs text-center rounded-t-xl h-4">Watched 78</div>
                <Image
                    src={user?.image}
                    fill={true}
                    className='object-cover absolute rounded-xl'
                />
           </div>
           <h3 className='text-xl'>{user?.name}</h3>
           <h5 className='text-sm'>{user?.email}</h5>
           <Link href={'/'}><button className='w-24 h-10 rounded-lg bg-blue-600 text-md' onClick={()=>void signOut()}>Sign Out</button></Link>
        </div>
        <div className="w-full sm:w-[60%] grow  h-[70svh] border-2 border-yellow-300 p-2 rounded-lg ">
            <div className='border-b-2 border-b-yellow-300 flex justify-between items-center px-2 w-full h-16'>
                <h3 className='text-xl'>WatchList</h3>
                <select className='rounded-lg p-2 bg-slate-900 focus:outline-none'>
                <option value="All">All</option>
                    <option value="Watching">Watching</option>
                    <option value="Planed">Planed</option>
                    <option value="On-Hold">On-Hold</option>
                    <option value="Dropped">Dropped</option>
                    <option value="Watched">Watched</option>
                </select>
            </div>
                <div className="flex justify-center items-center w-full h-[calc(100%-4rem)] b">
                    <span className='text-xl'>Your current WatchList is Empty</span>
                </div>
            
        </div>
    </div>
  )
}

export default User