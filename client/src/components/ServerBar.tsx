import { FaDiscord, FaPlus } from "react-icons/fa";
import { ServerI } from "../models";
import { RiSettings5Fill } from "react-icons/ri";
import { HR } from "flowbite-react";
import { useState } from "react";
import { NewServerM } from "./NewServerM";

interface ServerBarPropsI{
  ServerArray:ServerI[];
}
export function ServerBar(props:ServerBarPropsI):JSX.Element{
  const {ServerArray} = {...props}
  const [newServerModal,setNewServerModal] = useState<boolean>(false);
  return (
    <div className="w-20 h-screen bg-bg1 flex flex-wrap">
      <ul className="overflow-y-auto hiddenscroll" style={{height:'calc(100% - 5rem)'}}>
        <li 
          className="w-16 h-16 m-2 bg-bg2 text-header hover:!rounded-3xl transition-all duration-300 overflow-hidden"
          style={{borderRadius:'50%'}}
          >
          <a className="flex justify-center items-center w-full h-full text-5xl" href="/discord/@me/">
            <FaDiscord />
          </a>
        </li>
        {ServerArray.map((server)=>{
          return (
            <li 
            key={server.key}
            className="w-16 h-16 m-2 bg-bg2 text-header hover:!rounded-3xl transition-all duration-300 overflow-hidden"
            style={{borderRadius:'50%'}}
            >
              <a className="flex justify-center items-center w-full h-full text-5xl" href={'/discord/'+server.key+'/'}>
                {server.src?(
                  <img src={server.src} alt={server.name} />
                ):(
                  <FaDiscord/>
                )}
              </a>
            </li>
          )
        })}
        <HR className="h-0.5 m-3 bg-bg2"/>
        <li 
          className="w-16 h-16 m-2 bg-bg2 text-header hover:!rounded-3xl transition-all duration-300 overflow-hidden"
          style={{borderRadius:'50%'}}
          >
          <button
            type="button"
            className="flex justify-center items-center w-full h-full text-3xl"
            onClick={()=>setNewServerModal(true)}
          >
            <FaPlus />
          </button>
        </li>
      </ul>
      <div
        className="w-16 h-16 m-2 bg-bg2 text-header hover:!rounded-3xl transition-all duration-300 overflow-hidden"
        style={{borderRadius:'50%'}}
      >
        <a className="flex justify-center items-center w-full h-full text-5xl" href='/discord/settings'>
          <RiSettings5Fill/>
        </a>
      </div>
      <NewServerM newServerModal={newServerModal} setNewServerModal={(b:boolean)=>setNewServerModal(b)}/>
    </div>
  )
}