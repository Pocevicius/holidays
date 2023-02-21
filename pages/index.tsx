import { useEffect,useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import Trips from '../components/trips/Trips'
import Navbar from 'components/navbar/navbar';
import Button from 'components/button/button';
import Router from 'next/router';

export default function Home() {

  const[trips,setTrips]= useState<any>([])

  const fetchTrips=async()=>{
    const response= await axios.get("https://63e54153c04baebbcdb6ef34.mockapi.io/react/vacations");

    setTrips(response.data)
  }

  useEffect(()=>{
   fetchTrips()
  },[])


  const onClickHandler=()=>{
    Router.push(`/insertTrip`)
  }

  return (
    <>
      <Navbar/>
      <div className={styles.btnWrapper}> 
        <Button onClick={onClickHandler} text="Create Holiday"/>
      </div>
      <div className={styles.tripsWrapper}>
        {trips.map((data:any)=>{
          return(<Trips 
            id={data.id}
            imgSrc={data.ImageUrl}
            destinationCity={data.DestinationCity}
            about={data.Description}
            price={data.Price}
      />)
        })}
      
</div>
    </>
  )
}
