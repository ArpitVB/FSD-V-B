import React,{useState} from 'react'
import './Image_manipulation.css'
import logo from './assets/OIP (1).jpeg'








function Image_manipulation() {

  const [bg,setbg] = useState("black");
  const [ht,setht] = useState(200);
  const [wd,setwd] = useState(300);
  const [rt,setrt] = useState(0);

  const [red,setred] = useState(0);
  const [blue,setblue] = useState(0);
  const [green,setgreen] = useState(0);


  
  
  const change = () =>{
    
      setred(Math.random() * 255);
      setblue(Math.random() * 255);
      setgreen(Math.random() * 255);

      setbg(`rgb(${red},${green},${blue})`)
      
  }

  const heightEnhance = ()=>{
    setht(ht+20);
  }

  const widthEnhance = ()=>{
    setwd(wd+20);
  }

  const rotate = ()=>{
    
    setrt(rt+30);
    
  }

  

  return (
    <div className='imageCard'>
        <div className='imgdiv' style={{backgroundColor:bg}}><img src={logo} alt="" height={ht} width={wd} style={{transform:`rotate(${rt}deg)`}}/></div>

        <div className='btn'>

            <button onClick={change}>Change Background</button>
            <button onClick={heightEnhance}>Change Height</button>
            <button onClick={rotate}>Rotate</button>
            <button onClick={widthEnhance}>Change Width</button>

        </div>

    </div>
  )
}

export default Image_manipulation