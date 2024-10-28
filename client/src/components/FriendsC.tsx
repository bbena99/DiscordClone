import { Button } from "flowbite-react";
import { BsPersonPlus } from "react-icons/bs";

interface FriendsMPropsI{
  friends:string[];
}
export function FriendsC(props:FriendsMPropsI){
  const {friends} = {...props};
  return (<>
      <div id="top_bar" className="w-full h-14 bg-bg2">
        <Button className="w-36 h-full flex justify-center items-center bg-bg2 !text-header [&>span]:text-lg font-semibold">
          <BsPersonPlus className="text-2xl"/>&nbsp;
          Friends
        </Button>
      </div>
      {friends.map((f:string)=>{
        return <div key={f}>
          {f}
        </div>
      })}
    </>
  )
}