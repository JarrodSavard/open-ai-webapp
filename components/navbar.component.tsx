import Link from 'next/link'
import React from 'react'
import css from './navbar.module.css'

export const NavBar = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.logo}>
          <Link href="/">Logo</Link>
        </div>
        <div className={css.menu}>
          <Link href="/">Generate</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  )
}
