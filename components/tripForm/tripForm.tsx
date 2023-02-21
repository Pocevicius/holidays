import React,{useState} from 'react'
import styles from "./tripForm.module.css";
import Input from 'components/input/input';
import Button from 'components/button/button';
import axios from 'axios'
import  router  from 'next/router';

const TripForm: React.FC= () => {

  const [Destination,setDestination]=useState()
  const [Date,setDate]=useState()
  const [Duration,setDuration]=useState()
  const [imageURL,setImageURL]=useState()
  const [Price,setPrice]=useState()
  const [AddDescription,setAddDescription]=useState()

const onClickHandler= ()=>{
  console.log(Destination,Date,Duration,imageURL,Price,AddDescription)

  const tripData={DestinationCity:Destination,Date:Date,Duration:Duration,ImageUrl:imageURL,Price:Price,Description:AddDescription}

 const response= axios.post('https://63e54153c04baebbcdb6ef34.mockapi.io/react/vacations',tripData)
  console.log('response',response)

  router.push(`/`)

  

}

  return (
<div className={styles.main}>
    <Input onChange={setDestination} value={Destination} placeholder="Destination"/>
    <Input onChange={setDate}  value={Date} placeholder="Date"/>
    <Input onChange={setDuration}  value={Duration} placeholder="Duration"/>
    <Input onChange={setImageURL}  value={imageURL} placeholder="Image URL"/>
    <Input onChange={setPrice}  value={Price} placeholder="Price"/>
    <Input  onChange={setAddDescription} value={AddDescription} placeholder="Add description"/>
    <div className={styles.buttonWrapper}>  
        <Button onClick={onClickHandler} text="Publish"/>
        </div>
   </div>
  )
}
export default TripForm