import { useSession ,signIn, signOut, } from 'next-auth/react';
import {BsSearch} from "react-icons/bs"
import Image from 'next/image';
import localFont from "next/font/local"
import Link from 'next/link';
const op_font=localFont({
    src:"../fonts/One-piece-3/OnePiece-zAqL.ttf",
    variable:'--font-op'
})
export const Nav=()=>{
    const session=useSession();
    const user=session?.data?.user;
    return(
        <div className='flex justify-between items-center w-full h-12 bg-yellow-300 px-4'>
            <Link href={'/'}><span className={`${op_font.variable} font-sans text-xl`}><b><i>Weeb E Fied</i></b></span></Link>
            <div className="w-1/2  flex items-center ">
            <input type="search" name="" id="" className='focus:outline-none  border-b-slate-800 border-b-[1px] bg-transparent pl-2 text-slate-800 grow placeholder:text-slate-800' placeholder='Search'/>
            <BsSearch className='cursor-pointer'/>
            </div>
            {
                session.status=='authenticated'?(
                    <div className='w-10 h-10 relative rounded-2xl'>
                        <Link 
                        href={'./User'}
                            >
                        <Image
                            src={user.image}
                            width={100}
                            height={100}
                            alt='user Image'
                            className='absolute  rounded-2xl cursor-pointer'
                            />
                        </Link>
                    </div>
                ):(<button type="" className='w-20 h-10 border-slate-800 border-2 p-1 rounded-lg hover:bg-slate-800 hover:text-yellow-300' onClick={()=>{void signIn()}}>Sign In</button>)
            }
        </div>
    )
}
export default Nav