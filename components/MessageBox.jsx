import { useState } from "react";
import {AiFillMessage,AiOutlineDown} from "react-icons/ai";
import {FaLocationArrow} from "react-icons/fa"
const Message=()=>{
    const [open,setOpen]=useState(false);
    const [text,setTect]=useState({})
    if(!open){
        return(
       <AiFillMessage className="cursor-pointer fixed w-16 h-16 top-[85%] right-7 text-blue-400 " onClick={()=>setOpen(true)}/>
        )
    }else{
        return(
             <div className="fixed sm:w-80 sm:right-3 bottom-2 
              w-[100svw] h-[90svh]  z-10 bg-white rounded-t-xl" >
                <div className=" w-full h-fit bg-yellow-300 flex justify-between items-center p-2 rounded-t-xl text-slate-800">
                    <h3 className="text-xl">Messages</h3>
                    <AiOutlineDown className='cursor-pointer'onClick={()=>setOpen(false)}/>
                </div>
                <div className="  w-full px-2 h-[80%] bg-slate-600"></div>
                <div className="mt-2 px-2 items-center  w-full flex gap-2 ">
                    <input type="text" className="grow rounded-lg border-slate-800 border-2 p-2 h-[17%]" placeholder="Type Your Message" />
                    <FaLocationArrow className="text-slate-800"/>
                </div>
              </div>
        )
    }
}
export default Message