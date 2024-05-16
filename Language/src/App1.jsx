import React, { useState } from 'react'
import './index.css'
import Brands from './components/brands.jsx'
import Sidebar from './components/sidebar.jsx'
import Horizontalsidebar from './components/horizontalsidebar.jsx'
import Horizontalsidebar2 from './components/horizontalsidebar2.jsx'
import School from './components/school.jsx'
import Footer from './components/footer.jsx'
import Mid from './components/mid.jsx'
import Header from './components/header.jsx'
import App from './App.jsx'
import Login from './Login.jsx'

export default function App1() {
    const [loc,setloc] = useState("hero")
  return (
    <div>
   {loc==="hero"? <div>
    <Header/>
    <Sidebar setloc={setloc}/>
    <Brands/>
    <Horizontalsidebar/>
    <School setloc={setloc}/>
    <Horizontalsidebar2/>
    <Mid setloc={setloc}/>
    <Footer/>
    </div>:""}
    {
        loc==="app"?<App setloc={setloc}/>:""
    }
    {
      loc==="login"?<Login/>:""
    }
    
    </div>
  )
}
