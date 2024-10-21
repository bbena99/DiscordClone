import { Button } from "flowbite-react";
import { ServerI } from "../models";

interface ServerBarPropsI{
  ServerArray:ServerI[]
}
export function ServerBar(props:ServerBarPropsI):JSX.Element{
  const {ServerArray} = {...props}

  return (
    <div className="w-20 h-full p-2">
      <div className="w-16 h-16 bg-black transition ease-in-out delay-150 rounded-full hover:rounded-2xl ">
        p
      </div>
      <Button className="w-16 h-16 transition ease-in-out delay-150 rounded-full hover:rounded-2xl ">
        @me
      </Button>
    </div>
  )
}