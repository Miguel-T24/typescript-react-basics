let txButton:string = "Haz Click"

function suma(x: number,y:number) : number{
  return x + y;
}


function Button(){
  console.log("El numero es: ",suma(1,2));
  return(
    <button>{txButton}</button>
  )
}

function Page(){
  return(
  <Button />
  ) 
}

export default Page;