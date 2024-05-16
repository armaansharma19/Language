
import React from 'react'
import './School.css'
export default function School(props) {
  return (
   <>
   <div> 
   <div className='school'>
    <img src='https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/c0577127d555bd3e4f44.svg'></img>
    <h2><b>Send results to every school on your list for free</b></h2>
    <p> Thousands of universities around the world accept the Duolingo English Test.You can </p>
        
        <p>send 
        
        
        your results to as many of them as you want, for free. </p>
    <button onClick={()=>{props.setloc("app")}}>VIEW FLASHCARD</button>
   </div>
   </div>
  
   </>
  )
}
