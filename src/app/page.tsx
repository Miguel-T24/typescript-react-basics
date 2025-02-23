let txButton:string = "Haz Click"

// Puedo crear un type que puedo asignarselo a otro tipo de dato

type Color = "Red" | "Green" | "Blue"

//  puedo definir un tipo de dato
 type ButtonProps = {
  text : string,
  subtitle? :  string,
  color? : Color,
  // Puedo especificar que opciones son posibles
  backgroundColor? : Color | "Yellow"
 }
//  Los signos de interrogacion indican que la variable es opcional


function suma(x: number,y:number) : number{
  return x + y;
}


function Button(props: ButtonProps){
  console.log("El numero es: ",suma(1,2));

  // Podria extraer cada variable y asignarla
  const {text, subtitle, color, backgroundColor} = props


  return(
    <>
      <button>{txButton}</button>
      <button>{text}</button>
      <button>{subtitle}</button>
      <button>{color}</button> 
      <button>{backgroundColor}</button> 
    </>
  )
} 

function Page(){
  return(
  <Button text = "Hello World" subtitle = "Este es el subtitulo" color = "Red" backgroundColor="Yellow"/>
  ) 
}

export default Page;