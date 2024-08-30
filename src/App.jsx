
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo, useState } from 'react'

function App() {
  const[add,setAdd]=useState(0)
  const[minus,setMinus]=useState(100)

 const multiplication=useMemo(function multiply(){
  console.log("function clicked")
  return add*10;  
 },[add])
  return (
    <>
      <button onClick={()=>setAdd(add+1)}>Addition</button><br/>
      {multiplication}
      <div>{add}</div>
      <button onClick={()=>setMinus(minus-1)}>Substraction</button><br/>
      <div>{minus}</div>
    
   </>
  )
}

export default App
