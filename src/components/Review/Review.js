import React from 'react'
import s from './Review.module.css'
import Photo from '../../assets/photo.png'
import Left from '../../assets/left.png'
import Right from '../../assets/right.png'

const Review = () => {
  return (
    <section className={s.review}>
      <h2 className={s.review_title}>OUR CUSTOMER REVIEW</h2>
      <p className={s.review_text}>It is a long established fact that a reader will be distracted by the readable<br/> content of a page when looking at its layout. The point of using Lorem<br/> opposed to using 'Content here, content here..</p>
        <img className={s.review_img} src={Photo} alt="avatar"/>
        <p className={s.review_user_name}>Rasalida Williamson</p>
      <img className={s.review_left_arrow} src={Left} alt=""/>
      <img className={s.review_right_arrow}src={Right} alt=""/>
    </section>
  )
}

export default Review
