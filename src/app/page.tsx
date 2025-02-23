
//  puedo definir un tipo de dato
 type ButtonProps = {
  style : React.CSSProperties;
 };
//  Los signos de interrogacion indican que la variable es opcional


function Button({style} : ButtonProps){
  return(
    <>
      <button style={style}>Prueba</button>
    </>
  )
} 

function Page(){
  return(
    <>
    <Button style={{
      backgroundColor: "darkred", 
      color:"white",
      fontSize: "160px"
    }}/>
    </>
  )
}

export default Page;