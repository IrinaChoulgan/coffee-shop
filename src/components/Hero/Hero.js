import React from 'react'
import hero from '../../assets/hero.png'
import s from './Hero.module.css'

const Hero = () => {
  return (
    <section className={s.hero}>
       <div>
         <h1 className={s.hero_title}>ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</h1>
         <p className={s.hero_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis nostrud exercitation
             laboris nisi ut aliquip ex ea commodo consequat.</p>
       <div className={s.button_wrapper}>
           <button className={s.btn_explore}>Explore More</button>
           <button className={s.btn_read}>Read More</button>
       </div>
       </div>
       <div className={s.wrapper_img}>
          <img src={hero} alt="coffee" width="477px" height="506px"/>
       </div>

    </section>
  )
}

export default Hero
