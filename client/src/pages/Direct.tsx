import { TextInput } from "flowbite-react";

interface DirectPropsI{
  friends:string[];
  directMessages:string[]
}
export function Direct(props:DirectPropsI){
  const {friends,directMessages} = {...props}
  return <>
    <div id='subchannel_selector' className="w-60 h-full bg-bg2">
      <div id="Search_container" className="w-full h-12 p-2">
        <TextInput type="TextInput" placeholder="Find or Start a Conversation"/>
      </div>
    </div>
  </>
}