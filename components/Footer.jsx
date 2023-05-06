import React from 'react'
import style from "@/styles/Footer.module.css"
import {AiOutlineGithub} from "react-icons/ai"
const Footer = () => {
  return (
    <>
    <div className={style.footer}>
        <span>Here you will find list of latest released Animes a perfect place for weebs</span>

       <div className={style.wrapper}>
            <div className={style.logo}></div> 
            <button className={style.btn}>Follow now <AiOutlineGithub/></button>
       </div>
       <span>
       Copyright © <b>Be Seasonal</b> All Rights Reserved
This site does not store any files on its server.
       </span>
    </div>
    
    </>
  )
}

export default Footer