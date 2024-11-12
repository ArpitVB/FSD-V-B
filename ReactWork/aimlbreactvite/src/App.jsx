import React from 'react'
import './App.css'

function App() {

  let a =20;

  let mystyle ={
    backgroundColor : 'cyan',
    color:'red',
    border:'10px solid black',
    height : '100px',
    

  }
  return (
    <div style={{color:'red'}} className='Name'> 
    <h2>Abes Engineering College</h2>
    <div style={mystyle}>{a}</div>
    </div>
  )
}

export default App