import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdSportsVolleyball } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";
import { FriendsC } from "../components";

interface DirectPropsI{
  friends:string[];
  directMessages:string[]
}
export function Direct(props:DirectPropsI){
  const {friends,directMessages} = {...props}
  return <div className="flex w-full h-full">
    <div id='subchannel_selector' className="w-60 h-full bg-bg2">
      <div id="Search_container" className="w-full h-14 p-3">
        <TextInput type="TextInput" placeholder="Find or Start a Conversation" className="h-full [&>div]:h-full [&>div>input]:h-full"/>
      </div>
      <div className="w-full p-3 [&>button]:w-full [&>button]:bg-bg2 [&>button]:text-header [&>button]:!justify-start">
        <Button
          className="[&>span]:py-0.5 [&>span]:text-lg [&>span]:font-semibold [&>span]:flex [&>span]:items-center"
          onClick={()=>setShowFriends(true)}
        >
          <BsPersonPlusFill className="text-xl"/>&nbsp;
          Friends
        </Button>
        <Button className="[&>span]:py-0.5 [&>span]:text-lg [&>span]:font-semibold [&>span]:flex [&>span]:items-center">
          <MdSportsVolleyball className="text-xl"/>&nbsp;
          Nitro
        </Button>
        <Button className="[&>span]:py-0.5 [&>span]:text-lg [&>span]:font-semibold [&>span]:flex [&>span]:items-center">
          <PiShoppingCartFill className="text-xl"/>&nbsp;
          Shop
        </Button>
      </div>
      <div className="p-3">
        <div className="flex justify-center items-center text-header">
          <h3 className="text-sm font-semibold" style={{width:'calc(100% - 1rem)'}}>DIRECT MESSAGES</h3>
          <FaPlus className="w-4 text-sm"/>
        </div>
        {directMessages.map((curMessage:string)=>{
          return(
            <Button className="w-full bg-bg2 text-text justify-start [&>span]:py-0.5 [&>span]:font-semibold [&>span]:flex [&>span]:items-center">
              {curMessage}
            </Button>
          )
        })}
      </div>
    </div>
    <div>
      
    <FriendsC friends={friends} />
    </div>
  </div>
}