import React, { useState } from 'react'
import './App.css'
// import Student from './Student.jsx'
// import logo from './assets/OIP (1).jpeg'
// import StudentState from './StudentState.jsx'
// import Image_manipulation from './Image_manipulation.jsx'
// import UseEffect from './UseEffect.jsx'

import Registration from './components/Registration.jsx'
import Login from './components/Login.jsx'

function App() {

  const [shareData,setsharedata] = useState();

  // let a =20;

  // let mystyle ={
  //   backgroundColor : 'cyan',
  //   color:'red',
  //   border:'10px solid black',
  //   height : '100px',
    

  // }

  // const student_data = {
  //   name : "seth",
  //   roll : 45,
  //   college: "ABES Engineering College",
  //   sec : "B",
  //   branch : "Aiml",
  //   pic : 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png'
    
  // }
  return (

   

    <div style={{color:'black'}}> 
    {/* <h2>App</h2> */}


    {/* <Student college="ABES Engineering College" sec="B" roll="45" name = "Seth" branch ="Aiml" pic = {<img src={logo} height={100} width={100}/>}/>
    <Student  sec="B" roll="46" name = "Tomar" branch ="Aiml" pic = {<img src={logo} height={100} width={100}/>}/>
    <Student college="ABES Engineering College" sec="B" roll="47" name = "Diwedi" branch ="Aiml" pic = {<img src={logo} height={100} width={100}/>}/> */}

    {/* <Student data = {student_data}/> */}


    
    {/* <StudentState/>

    <Image_manipulation/>

    <UseEffect/> */}

   
    <Registration regdata={setsharedata}/>





    </div>
  )
}

export default App