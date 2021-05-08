import React, { FC } from 'react'
import styles from '../../styles/navbar.module.css'

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div> POJOK KIRI </div>
      <div> POJOK KANAN </div>
    </div>
  )
}

export default Navbar
