import React from 'react'
import '../../src/App.css'
import cloudImg from "/images/Cloud-Curve.png"

// import AddImg from "/images/Up-&-Down.png"

// import Image from './Image'

function InfoCard({ src1, src2, city, degree, weatherCondition,minTemp,maxTemp ,country}) {
  return (
    <>

      <div className='card infoCard'>
        <h3 className='heading'>{city.toUpperCase()} {country ? <sup>({country})</sup>:<sup>{''}</sup> }</h3>
        <img className='infoPart-img'src={cloudImg} alt="" />
        <div className='weatherInfo'>
          <h1 className='degree'>{degree}<sup>&deg;</sup></h1>
          <h3 className='weatherCondition'>{weatherCondition}</h3>
        </div>
        <div className='meter'>
      
            <div className='minVal-parent'>
              <p>Min</p>
              <h3>{minTemp}<sup>&deg;</sup></h3>
            </div>
            <div className='maxVal-parent'>
              <p>Max</p>
              <h3>{maxTemp}<sup>&deg;</sup></h3>
            </div>
            
        </div>

      </div>
    </>
  )
}

export default InfoCard