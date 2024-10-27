import { Modal } from "flowbite-react";

interface FriendsMPropsI{
  show:boolean;
  setShow:(s:boolean)=>void;
  friends:string[];
}
export function FriendsM(props:FriendsMPropsI){
  const {show,setShow,friends} = {...props};
  return (
    <Modal
      dismissible
      show={show}
      onClose={()=>{
        setShow(false);
      }}
      className="!bg-bg2 !text-text"
    >
      <Modal.Header className="!text-header">Friends</Modal.Header>
      <Modal.Body>
        {friends.map((f:string)=>{
          return <div>
            {f}
          </div>
        })}
      </Modal.Body>
    </Modal>
  )
}