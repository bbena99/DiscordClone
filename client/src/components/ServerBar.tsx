import { FaDiscord } from "react-icons/fa";
import { ServerI } from "../models";

interface ServerBarPropsI{
  ServerArray:ServerI[]
}
export function ServerBar(props:ServerBarPropsI):JSX.Element{
  const {ServerArray} = {...props}

  return (
    <ul className="w-20 h-full p-1 bg-bg1">
      <li 
        className="w-16 h-16 m-1 bg-bg2 text-header hover:!rounded-3xl transition-all duration-300 overflow-hidden"
        style={{borderRadius:'50%'}}
      >
        <a className="flex justify-center items-center w-full h-full text-6xl" href="@me/">
          <FaDiscord />
        </a>
      </li>
      {ServerArray.map((server)=>{
        return (
          <li 
            key={server.key}
            className="w-16 h-16 m-1 bg-bg2 text-header hover:!rounded-3xl transition-all duration-300 overflow-hidden"
            style={{borderRadius:'50%'}}
          >
            <a className="flex justify-center items-center w-full h-full text-6xl" href={server.key}>
              {server.src?(
                <img src={server.src} alt={server.name} />
              ):(
                <FaDiscord/>
              )}
            </a>
          </li>
        )
      })}
    </ul>
  )
}