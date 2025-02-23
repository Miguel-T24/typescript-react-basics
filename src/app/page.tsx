
//  puedo definir un tipo de dato
 type ButtonProps = {
  userAges : Record <"Alice" | "Bob" | "Juan", number>
 };
//  Los signos de interrogacion indican que la variable es opcional


function Button({} : ButtonProps){
  return(
    <>
      <button >Prueba</button>
    </>
  )
} 

function Page(){
  return(
    <>
    <Button userAges = {{
      Alice : 20,
      Bob : 22,
      Juan : 30
    }}/>
    </>
  )
}

export default Page;