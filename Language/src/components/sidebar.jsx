import React from 'react'
import './Sidebar.css'

export default function Sidebar(props) {
  return (
   <>
   
   <div className='sidebar'>
   
   <div className='left'>
        <div>
        <h1>
Flashcard languages aid vocabulary retention.</h1>
        <ul>
             <p>Practice free , anytime, anywhere</p>
             <p>Finish in 1 hour and get results in 2 days</p>
             <p>Accepted by Chitkara University</p>
        </ul>
        <button onClick={()=>{props.setloc("app")}}><b>Create a flashcard set</b></button>
        <button onClick={()=>{props.setloc("login")}}>Login</button>
        </div>
   </div>

    <div className='right'>
       <img src='https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/da0c12bab844e3569971.svg'></img>
    </div>
   </div>
   
   
   
   
   </>
  )
}
