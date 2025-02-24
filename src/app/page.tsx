'use client'

import { Dispatch, SetStateAction, useState } from "react";

//  puedo definir un tipo de dato
 type ButtonProps = {
  setCount: Dispatch<SetStateAction<number>>;
 };

function Button({setCount} : ButtonProps){
  return(
    <>
      <button onClick={() => setCount(10)}>
        Test String
      </button>
    </>
  )
} 

function Page(){
  const[count, setCount] = useState<number>(0);
  return(
    <>
      <h1>{count}</h1>
      <Button setCount={setCount}/>
    </>
  )
}

export default Page;