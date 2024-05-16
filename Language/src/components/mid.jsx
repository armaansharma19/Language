import React from 'react'
import './Mid.css'

export default function Mid(props) {
  return (
    <>
    
    <div> 
   <div className='mid'>
    {/* <img src='https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/c0577127d555bd3e4f44.svg'></img> */}
    <h2><b>Get started</b></h2>
   <p>     Sign up now and certify your English proficiency today. Test online anytime, anywhere. Finish </p>
    <p> 
    in 1 hour and get results in 2 days. Share your results with 5000+ institutions.</p>
    <button className='buttonmi' onClick={()=>{props.setloc("app")}}>Create your flashcard</button>
   </div>
   </div>
    
    </>
  )
}
