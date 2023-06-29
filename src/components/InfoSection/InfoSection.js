import React from 'react'
import s from './InfoSection.module.css'

const InfoSection = () => {
  return (
    <section className={s.infoSection}>
      <div className={s.infoSection_wrapper}>
        <h2 className={s.infoSection_title}>Roasted CoffeeFor You</h2>
        <p className={s.infoSection_text}>Donec et nibh maximus, congue est eu, mattis nunc. Praesent utquam quis quam venenatis fringilla. Morbi vestibulum id tellusmmodo mattis. Aliquam erat volutpat.</p>
        <button className={s.infoSection_btn}>Explore More</button>
      </div>
    </section>
  )
}

export default InfoSection
