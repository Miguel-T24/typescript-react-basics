'use client'

import { ComponentProps } from "react";

type buttonProps = ComponentProps<"button">;

function Button({}: buttonProps){
  return(
    <>
      <button>{}</button>
    </>
  )
} 

function Page(){
  return(
    <>
      <Button style={{}}/>
    </>
  )
}

export default Page;