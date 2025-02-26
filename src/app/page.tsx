'use client'

import { useState , useRef} from "react"

type User = {
  name: string,
  age: number
}

function Button(){
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("Button");
  const [activate, setActivate] = useState<boolean>(false);

  const [user, setUser] = useState<User|null>(null);
  const myButton = useRef<HTMLButtonElement>(null);
    console.log(user?.name);
    console.log(user?.age);

  return(
    <>
      <button ref = {myButton}>Button</button>
    </>
  )
} 

function Page(){
  return(
    <>
      <Button></Button>
    </>
  )
}

export default Page;