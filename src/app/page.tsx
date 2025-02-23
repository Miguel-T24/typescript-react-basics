'use client'

//  puedo definir un tipo de dato
 type ButtonProps = {
  onClick : (text: string) => void,
 };
//  Los signos de interrogacion indican que la variable es opcional


function Button({onClick} : ButtonProps){
  return(
    <>
      <button onClick = {() => onClick("Hello World")}>Test</button>
    </>
  )
} 

function Page(){
  return(
    <>
    <Button onClick={() => {alert('Funciona')}}/>
    </>
  )
}

export default Page;