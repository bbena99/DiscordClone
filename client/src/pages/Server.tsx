import { ServerI } from "../models";

interface ServerPropsI{
  server:ServerI;
}

export function Server(props:ServerPropsI):JSX.Element{
  const {server} = {...props};
  return <>
    Server.tsx works
  </>
}
