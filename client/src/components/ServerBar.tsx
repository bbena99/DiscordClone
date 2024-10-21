import { ServerI } from "../models";

interface ServerBarPropsI{
  ServerArray:ServerI[]
}
export function ServerBar(props:ServerBarPropsI):JSX.Element{
  const {ServerArray} = {...props}

  return (
    <ul className="w-20 h-full p-2">
      <li 
        className="w-16 h-16 bg-gray-500 rounded-50 hover:rounded-2xl transition-all duration-300"
      >
        me
      </li>
    </ul>
  )
}