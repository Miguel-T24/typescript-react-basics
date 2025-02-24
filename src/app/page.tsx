'use client'

//  puedo definir un tipo de dato
 type ButtonProps = {
  title? : string;
 };

function Button({title = "Titulo por Defecto"} : ButtonProps){
  return(
    <>
      <button >
        {title}
      </button>
    </>
  )
} 

function Page(){
  return(
    <>
      <Button />
    </>
  )
}

export default Page;