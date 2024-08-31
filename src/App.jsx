import { useEffect, useState } from 'react'
import './App.css'
import AddCard from './components/AddCard'
import InfoCard from './components/InfoCard'
import cloudImg from "/images/Cloud-Curve.png"
import cityImg from "/images/City-Image.png"
import AddImg from "/images/Add-Symbol.png"



function App() {

  const [cityName,setCityname] = useState(``)
  const [weatherStatus,setWeatherStatus] = useState({temp:'Temp',humidity:'0',windSpeed:'windSpeed',condition:'condition',minTemp:'mintemp',maxTemp:'maxtemp',city:'City Name',country:''})

  

  const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9b76ab312a3c4868d4aa9e2cc383570d`
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
        const test = data.main.humidity
        console.log(test)
      // console.log( Math.round((test * 3.6).toFixed(2) ) )
      setWeatherStatus(
        {temp:data.main.temp,
        condition:data.weather[0].main,
        minTemp:data.main.temp_min,
        maxTemp:data.main.temp_max,
        city:cityName,
        humidity:data.main.humidity,
        windSpeed:data.wind.speed ,
        country:data.sys.country

        })
    } catch (error) {
      setWeatherStatus(
        {temp:'Temp',
          condition:'condition',
          minTemp:'maxTemp',
          maxTemp:'minTemp',
          windSpeed:'windSpeed',
          city:"city Name",
          
        })
        alert('Please Enter Correct country name or check spelling')
      console.error('Error fetching data:', error);
    }
  };
  


  const proceed = ()=>{

    fetchData()
    setCityname('')
}
  

  return (
    <>
    <div className='main'>
      <InfoCard  country={weatherStatus.country} humidity={weatherStatus.humidity} minTemp={weatherStatus.minTemp} windSpeed={weatherStatus.windSpeed} maxTemp={weatherStatus.maxTemp} weatherCondition={weatherStatus.condition} temp={weatherStatus.temp} city={weatherStatus.city}  src1={cloudImg}/>
      <AddCard proceed={proceed} cityName={cityName} setCityname={setCityname} cityHeading={'Enter Any City '} src2={AddImg} src1={cityImg}/>
    </div>
    </>
  )
}

export default App
