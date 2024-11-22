import React,{useState} from 'react'
import './Image_manipulation.css'
import logo from './assets/OIP (1).jpeg'

const [bg,setbg] = useState("black");
const [ht,setht] = useState(500);
const [wd,setwd] = useState(100);
const [rt,setrt] = useState(0);


const change = () =>{
    
}






function Image_manipulation() {
  return (
    <div className='imageCard'>

        <div className='imgdiv'><img src={logo} alt="" /></div>

        <div className='btn'>

            <button onClick={change}>Change Background</button>
            <button>Change Height</button>
            <button>Rotate</button>
            <button>Change Width</button>

        </div>

    </div>
  )
}

export default Image_manipulation