import React from 'react'
import s from './Product.module.css'

import { data } from './data'

const Product = () => {
  return (
    <section className={s.product}>
      <h2 className={s.product_title}>Cafena Popular Product</h2>
      <div className={s.wrapper}>
        {data.map((item,index)=>
          <div className={s.product_wrapper} key={index}>
          <img className={s.product_img} src={item.src} alt="coffee" key={index}/>
            <div className={s.product_text_wrapper}>
              <p className={s.product_text}>{item.text}</p>
              <span className={s.product_price}>{item.price}</span>
            </div>
        </div>
        )}
        </div>
    </section>
  )
}

export default Product
