import React from 'react'
import '../../src/App.css'
import cloudImg from "/images/Cloud-Curve.png"

// import AddImg from "/images/Up-&-Down.png"

// import Image from './Image'

function InfoCard({ src1, src2, city, temp, weatherCondition,minTemp,maxTemp ,country}) {

  const roundedTemp = Math.round(Number(temp) - 273.15);
  const roundedTempMax = Math.round(Number(maxTemp) - 273.15);
  const roundedTempMin = Math.round(Number(minTemp) - 273.15);

  return (
    <>

      <div className='card infoCard'>
        <h3 className='heading'>{city.toUpperCase()} {country ? <sup>({country})</sup>:<sup>{''}</sup> }</h3>
        <img className='infoPart-img'src={cloudImg} alt="clound-img" />
        <div className='weatherInfo'>
          <h1 className='degree'>{roundedTemp? roundedTemp: "Temp" }<sup>&deg;</sup></h1>
          <h3 className='weatherCondition'>{weatherCondition}</h3>
        </div>
        <div className='meter'>
      
            <div className='minVal-parent'>
              <p>Min-Temp</p>
              <h3>{roundedTempMax? roundedTempMax:  "0"}<sup>&deg;</sup></h3>
            </div>
            <div className='maxVal-parent'>
              <p>Max-Temp</p>
              <h3>{roundedTempMin ? roundedTempMin : "0"}<sup>&deg;</sup></h3>
            </div>
            
        </div>

      </div>
    </>
  )
}

export default InfoCard