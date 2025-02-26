'use client'

import { ComponentProps } from "react";
import { ComponentPropsWithoutRef, MouseEvent } from "react";

type buttonProps = ComponentProps<"button"> & {
  dark?:boolean,
  variant?:"Primary" | "Secondary"
  children : boolean
};

function Button({}:buttonProps){
  const handleclick = (e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {}

  return(
    <>
      <button onClick={handleclick}>Button</button>
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