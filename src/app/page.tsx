'use client'

import {JSX} from "react";

//  puedo definir un tipo de dato
 type ButtonProps = {
  // Puedo decir que los children de este boton son de un tipo especifico o de diferentes tipos
  // Children:  React.ReactNode;
  children : JSX.Element | JSX.Element[] | string,
 };

function Button({} : ButtonProps){
  return(
    <>
      <button>
        Test String
      </button>
    </>
  )
} 

function Page(){
  return(
    <>
      <Button>
        Probando un children con tipo de dato string
      </Button>
    </>
  )
}

export default Page;