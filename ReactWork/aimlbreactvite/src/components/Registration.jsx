import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function Registration({regdata}) {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState();


    const getdata = (e)=>{

        e.preventDefault();
        

        console.log(name)
        const data = {
            name,pass,email
        }

        regdata(data);
        

        
    }

  return (
    <div>
        
        <h1 className='text-center'>Registration</h1>
        <form>
        <div className="m-5 ">
    <label for="exampleInputName1" className="form-label">UserName</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="NameHelp" value={name}
    onChange={(e)=>{setName(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="m-5 ">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
    onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="m-5">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
  </div>
  <div className="m-5 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary m-5" onClick={getdata}>Submit</button>
</form>

       
    </div>
  )
}

export default Registration