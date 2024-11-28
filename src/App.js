import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './data/PassChar.jsx';


function App() {
  let [Uppercase,setUppercase]=useState(false)
  let [Lowercase,setLowercase]=useState(false)
  let [number,setnumber]=useState(false)
  let [Symbol,setSymbol]=useState(false)
  let[passwordlen,setpasswordlen]=useState(10)
  let[fPass,setfpass]=useState('')

  let createPassword=()=>{
    let finalPass=''
    let charSet =''
   if(Uppercase || Lowercase || number|| Symbol){
    if(Uppercase) charSet+=UC;
    if(Lowercase) charSet+=LC;
    if(number) charSet+=NC;
    if(Symbol) charSet+=SC;
    for(let i=0;i<passwordlen;i++){
      finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
    }
    setfpass(finalPass)



    

   }
   else{
    alert("Please Select any one checkBox!. ")
   }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }

  return (
   <>
   <div className='password-generator'>
    <h2>Password-Generator</h2>

    <div className='passwordBoxin'>
      <input type='text' value={fPass} readOnly  />
      <button onClick={copyPass}>Copy</button>
      
    </div>
    <div className='passLength'>
    <label>Password length</label>
    <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=> setpasswordlen(event.target.value)} />
    </div>

    <div className='passLength'>
    <label>Include Uppercase letters</label>
    <input type='checkbox' checked ={Uppercase} onChange={()=>setUppercase(!Uppercase)}/>
    </div>
    <div className='passLength'>
    <label>Include lowercase letters</label>
    <input type='checkbox' checked ={Lowercase} onChange={()=>setLowercase(!Lowercase)} />
    </div>

    <div className='passLength'>
    <label>Include numbers</label>
    <input type='checkbox' checked ={number} onChange={()=>setnumber(!number)} />
    </div>

    <div className='passLength'>
    <label>Include symbols</label>
    <input type='checkbox' checked ={Symbol} onChange={()=>setSymbol(!Symbol)} />
    </div>
    <button className='button' onClick={createPassword}>
       Generate password</button>
       
   </div>
   </>
  );
}

export default App;
