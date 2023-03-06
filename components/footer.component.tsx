import React from 'react'
import css from './footer.module.css'

export const Footer = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <p>Create by
        <a className={css.aTag} href='https://www.jarrodsavard.com' rel="noreferrer" target="_blank"> Jarrod Savard</a>
        </p>
      </div>
    </div>
  )
}

