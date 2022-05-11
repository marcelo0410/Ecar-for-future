import React from 'react'
import style from './style.module.css'

export default function Banner() {
  return (
    <div className={style.banner}>
        <div className={style.banner__title}>Select your car</div>
        <div className={style.banner_desc}>The future prediction of Victoria is based on the government's development blueprint.  </div>
    </div>
  )
}
