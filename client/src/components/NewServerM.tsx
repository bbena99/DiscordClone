import { Label, Modal, TextInput } from "flowbite-react";
import { ServerI } from "../models";

interface NewServerMPropsI{
  newServerModal:boolean
  setNewServerModal:(b:boolean)=>void;
}
export function NewServerM(props:NewServerMPropsI):JSX.Element{
  const {newServerModal,setNewServerModal} = {...props};
  const newServer:ServerI = {
    name: "",
    nameNoSpace: "",
    key: "",
    folders: []
  }
  return (
    <Modal
      dismissible
      show={newServerModal}
      onClose={()=>{
        setNewServerModal(false)
      }}
      className="!bg-bg2 !text-text"
    >
      <Modal.Header className="!text-header">New Server</Modal.Header>
      <Modal.Body>
        <div id="Join_container">
          <Label htmlFor="Join_input" value="Invite Link"/>
          <TextInput id="Join_input" type="TextInput"/>
        </div>
      </Modal.Body>
    </Modal>
  )
}