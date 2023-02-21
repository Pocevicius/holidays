import axios from "axios"
import { useEffect ,useState} from "react"
import{useRouter} from "next/router"
import Navbar from "components/navbar/navbar"
import styles from"./trip.module.css"
import ActionButton from "components/ActionButton/ActionButton"




export default function FormPage() {
  const[Trip,setTrip]=useState<any>()

  const router = useRouter()

  const fetchTrip = async () =>{
    const Trip = await axios.get(`https://63e54153c04baebbcdb6ef34.mockapi.io/react/vacations/${router.query.id}`)
    setTrip(Trip.data)
    console.log(Trip.data)
  }

  useEffect(()=>{
    if(router.query.id){
    fetchTrip()
  }
  },[router.query])

   const onClickHandler=()=>{
    router.push(`https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley`)
  }
  return (
    <>
     <div>
      <Navbar/>
      {Trip&&
      <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.details}>
        <h1>{Trip.DestinationCity}</h1>
        <h2>{Trip.Description}</h2>
        <h3>{Trip.Date}</h3>
        <h4>{Trip.Duration}</h4>
        <h5>{Trip.Price}$</h5>
        </div>
        <div className={styles.actions}>
          <ActionButton onClick={onClickHandler} text="Book!"/>
        </div>
      </div>
      <img className={styles.header} src={Trip.ImageUrl}/>
      </div>
      }
     </div>

    </>
  )
}
