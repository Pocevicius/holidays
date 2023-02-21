import React from 'react'
import styles from "./navbar.module.css";


const Navbar: React.FC = ({
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        Makatumba
      </div>
    </div>
  )
}
export default Navbar