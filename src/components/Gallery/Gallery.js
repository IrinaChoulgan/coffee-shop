import React from 'react'
import s from './Gallery.module.css'

import { data } from './data'


const Gallery = () => {
  return (
    <section className={s.gallery}>
      <ul className={s.gallery_list}>
        {data.map((item,index) => 
            <li className={s.gallery_item} key={index}>
            <div className={s.gallery_item_title}>
                <img src={item.bg} alt="bg"/>
                <span className={s.gallery_item_number}>{item.number}</span>
                <br/>
                <p className={s.gallery_item_main_text}>{item.text}</p>
            </div>
            <img className={s.gallery_img} src={item.img} alt={item.text}/>
            <p className={s.gallery_item_text}>Curabitur semper erat a lacusey sedny<br/>
              consequat,sit ametey.</p>
              <div className={s.gallery_bg}/>
        </li>
        )}
      </ul>
    </section>
  )
}

export default Gallery
