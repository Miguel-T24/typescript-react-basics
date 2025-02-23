
//  puedo definir un tipo de dato
 type ButtonProps = {
  padding : [number,number,number?,number?],
 }
//  Los signos de interrogacion indican que la variable es opcional


function Button({ } : ButtonProps){
  return(
    <>
      <button>padding</button>
    </>
  )
} 

function Page(){
  return(
  <Button padding = {[22,23,24,15]}/>
  ) 
}

export default Page;