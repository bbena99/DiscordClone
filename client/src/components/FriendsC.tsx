interface FriendsMPropsI{
  friends:string[];
}
export function FriendsC(props:FriendsMPropsI){
  const {friends} = {...props};
  return (<>
      {friends.map((f:string)=>{
        return <div>
          {f}
        </div>
      })}
    </>
  )
}