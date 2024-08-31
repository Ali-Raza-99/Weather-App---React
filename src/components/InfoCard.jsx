import React from 'react'
import '../../src/App.css'
import cloudImg from "/images/Cloud-Curve.png"

// import AddImg from "/images/Up-&-Down.png"

// import Image from './Image'

function InfoCard({ src1, src2, city, temp, windSpeed, humidity, weatherCondition, minTemp, maxTemp, country }) {

  const roundedTemp = Math.round(Number(temp) - 273.15);
  const roundedTempMax = Math.round(Number(maxTemp) - 273.15);
  const roundedTempMin = Math.round(Number(minTemp) - 273.15);
  const roundedWindSpeed = Math.round((Number(windSpeed) * 3.6).toFixed(2))
  return (
    <>

      <div className='card infoCard'>
        <h3 className='heading'>{city.toUpperCase()} {country ? <sup>({country})</sup> : <sup>{''}</sup>}</h3>
        <img className='infoPart-img' src={cloudImg} alt="clound-img" />
        <div className='weatherInfo'>
          <h1 className='degree'>{roundedTemp ? roundedTemp : "Temp"}<sup>&deg;</sup></h1>
          <h3 className='weatherCondition'>{weatherCondition}</h3>
        </div>
        <div className='meter'>

          <div className='meter-row1'>
            <div className='minVal-parent'>
              <p>Min-Temp</p>
            <span>:</span>
              <h3>{roundedTempMax ? roundedTempMax : "0"}<sup>&deg;</sup></h3>
            </div>
            <div className='maxVal-parent'>
              <p>Max-Temp</p>
            <span>:</span>
              <h3>{roundedTempMin ? roundedTempMin : "0"}<sup>&deg;</sup></h3>
            </div>
          </div>
          <div className="meter-row2">
          <div className='windSpeed'>
            <p>Wind-Speed</p>
            <span>:</span>
            <h3>{roundedWindSpeed ? `${roundedWindSpeed}km/h` : "0 km/h"}</h3>
          </div>
          <div className='humidity'>
            <p>Humidity</p>
            <span>:</span>
            <h3 >{humidity ? `${humidity}%` : "0%"}</h3>
          </div>
          </div>

         
        </div>

      </div>
    </>
  )
}

export default InfoCard