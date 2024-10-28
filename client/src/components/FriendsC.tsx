import { Button } from "flowbite-react";
import { BsPersonPlus } from "react-icons/bs";

interface FriendsMPropsI{
  friends:string[];
}
export function FriendsC(props:FriendsMPropsI){
  const {friends} = {...props};
  return (<>
      <div id="top_bar" className="w-full h-14 bg-bg2 p-3 flex">
        <Button className="w-36 h-full flex justify-center items-center bg-bg2 !text-header [&>span]:text-lg font-semibold">
          <BsPersonPlus className="text-2xl"/>&nbsp;
          Friends
        </Button>
        <Button className="[&>span]:p-1 mx-1">
          Online
        </Button>
        <Button className="[&>span]:p-1 mx-1">
          All
        </Button>
        <Button className="[&>span]:p-1 mx-1">
          Pending
        </Button>
        <Button className="[&>span]:p-1 mx-1">
          Suggestions
        </Button>
        <Button className="[&>span]:p-1 mx-1">
          Blocked
        </Button>
        <Button className="[&>span]:p-1 mx-1">
          Add Friend
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