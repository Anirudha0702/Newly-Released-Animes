import Link from 'next/link'
import React from 'react'
import {AiOutlineGithub,AiFillTwitterSquare,AiFillFacebook,AiOutlineInstagram} from "react-icons/ai"
import localFont from "next/font/local"
const op_font=localFont({
    src:"../fonts/one-piece-3/OnePiece-zAqL.ttf",
    variable:'--font-op'
})
const Footer = () => {
  return (
    <>
    <footer className={`w-full bg-yellow-300 mt-2 flex justify-center items-center flex-col ${op_font.variable} font-sans`}>
       <div className="flex gap-4 h-8 justify-center items-center my-3">
           <span className='border-r-2 pr-1 border-r-slate-800'>Follow us</span>
           <Link href={process.env.NEXT_PUBLIC_GITHUB}><AiOutlineGithub className='w-6 h-6 cursor-pointer'/></Link>
           <Link href={process.env.NEXT_PUBLIC_INSTAGRAM}><AiOutlineInstagram className='w-6 h-6 cursor-pointer'/></Link>
           <Link href={process.env.NEXT_PUBLIC_FACEBOOK}><AiFillFacebook className='w-6 h-6 cursor-pointer'/></Link>
           <Link href={process.env.NEXT_PUBLIC_TWITTER}><AiFillTwitterSquare className='w-6 h-6 cursor-pointer'/></Link>
       </div>
       <span>
       Copyright ©<b><i>Weeb E Fied</i></b> All Rights Reserved
This site does not store any files on its server.
       </span>
    </footer>
    
    </>
  )
}

export default Footer
