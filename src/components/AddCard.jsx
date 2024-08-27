import React, { useEffect,useState } from 'react'
import '../../src/App.css'
import App from '../App'

function AddCard({src1,src2,cityHeading,cityName,setCityname,proceed}) {

    const handleChange = (e)=>{
      setCityname(e.target.value)
    }
   
  return (
    <>
    
    <div className='card addCard'>
        <h3 className='heading'>{cityHeading}</h3>
        <img className={'add-img'} src={src2} alt="" />
        <input value={cityName} onChange={handleChange} className='searchInp' type="text" />
        <button onClick={proceed} className='proceedBtn'>Proceed</button>
        <img className='addPart-img' src={src1} alt="" />

    </div>
    
    </>
  )
}

export default AddCard