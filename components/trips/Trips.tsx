import React from 'react'
import styles from "./trips.module.css";
import Router from 'next/router';

type TripsType={
    imgSrc: string
    destinationCity:string
    about:string
    id:string
    price:string
}

const Trips: React.FC<TripsType> = ({
    imgSrc,
    destinationCity,
    about,
    id,
    price
}) => {

  const onClickHandler=()=>{

    Router.push(`/trip/${id}`)
  }

  return (
    <div onClick={onClickHandler} className={styles.main}>
      <div className={styles.imgWrapper}>
        <img className={styles.image} alt='trip' src={imgSrc}/>
        <h1>{price}$</h1>
        </div>
        <div className={styles.content}>
          <h1 className={styles.destination}>{destinationCity}</h1>
          <h5 className={styles.about}>{about}</h5>
          </div>
    </div>
  )
}
export default Trips
