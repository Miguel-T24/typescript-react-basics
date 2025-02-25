'use client'

import { ComponentProps } from "react";

type buttonProps = ComponentProps<"button">;

function Button({onClick, ...rest}:buttonProps){

  const handleClick = () => {
    if(onClick){
      alert("Clicked")
    }
  }

  return(
    <>
      <button onClick = {handleClick} {...rest}>Button</button>
    </>
  )
} 

function Page(){
  return(
    <>
      <Button 
      onClick={() => alert("Hello World")}
      style={{
        color : "red",
        backgroundColor : "Black"
      }}

      >
        click me
      </Button>
    </>
  )
}

export default Page;