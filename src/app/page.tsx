'use client'

//  Cuando usar Type y cuando usar interface

//  type ButtonProps = {
//   title? : string;
//   count? : number;
//  };

type Color = 'Red' | "Green" | "Blue"
interface ButtonProps {
  title?: string;
  count?: number;
  color?: Color;
};


//  La diferencia esta en que una interface es un objeto, por lo que cuando hay que definir el los tipos de datos, hay que decirle a un props de que tipo es, hay que extraerlo como un objeto, miestras que con type, puede solo colocar un solo tipo de dato, como se muestra en esta combinacion type interface.

function Button({title, count , color}:ButtonProps){
  return(
    <>
      <button >
        {title}
        {count}
        {color}
      </button>
    </>
  )
} 

function Page(){
  return(
    <>
      <Button title = "youtube.com"  count = {0} color = "Red"/>
    </>
  )
}

export default Page;