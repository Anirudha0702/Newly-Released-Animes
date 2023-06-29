import { useSession ,signIn, signOut, } from 'next-auth/react';
import Image from 'next/image';
export const Nav=()=>{
    const session=useSession();
    const user=session?.data?.user;
    console.log(user?.image)
    return(
        <div className="flex justify-between items-center w-full h-12 bg-yellow-300 px-4">
            <span><b><i>Weeb E Fied</i></b></span>
            <input type="search" name="" id="" className='focus:outline-none w-1/2 border-b-slate-800 border-b-2 bg-transparent pl-2 text-slate-800' placeholder='Search'/>
            {
                session.status=='authenticated'?(
                    <div className='w-10 h-10 relative rounded-2xl'>
                        <Image
                            src={user.image}
                            width={100}
                            height={100}
                            alt='user Image'
                            className='absolute  rounded-2xl cursor-pointer'
                            onClick={()=>{void signOut()}}/>
                    </div>
                ):(<button type="" className='w-20 h-10 border-slate-800 border-2 p-1 rounded-lg hover:bg-slate-800 hover:text-yellow-300' onClick={()=>{void signIn()}}>Sign In</button>)
            }
        </div>
    )
}
export default Nav