let txButton:string = "Haz Click"

//  puedo definir un tipo de dato
 type ButtonProps = {
  text : string,
  subtitle? :  string,
  color? : string
 }
//  Los signos de interrogacion indican que la variable es opcional


function suma(x: number,y:number) : number{
  return x + y;
}


function Button(props: ButtonProps){
  console.log("El numero es: ",suma(1,2));

  // Podria extraer cada variable y asignarla
  const {text, subtitle, color} = props


  return(
    <>
      <button>{txButton}</button>
      <button>{text}</button>
      <button>{subtitle}</button>
      <button>{color}</button>
    </>
  )
} 

function Page(){
  return(
  <Button text = "Hello World" subtitle = "Este es el subtitulo" color = "Red" />
  ) 
}

export default Page;