'use client'

import { ComponentProps } from "react";

type buttonProps = ComponentProps<"button"> & {
  dark?:boolean,
  variant?:"Primary" | "Secondary"
  children : boolean
};

function Button({dark, variant, children }:buttonProps){
  variant = "Primary"
  return(
    <>
      <button>Button</button>
    </>
  )
} 

function Page(){
  return(
    <>
      <Button>{true}</Button>
    </>
  )
}

export default Page;