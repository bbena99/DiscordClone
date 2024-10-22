import { Button } from "flowbite-react";
import { THEME } from "../constants";

interface PageLayoutPropsI{
  theme:string;
  setTheme:(t:string)=>void;
}
export function PageLayout(props:PageLayoutPropsI):JSX.Element{
  const {theme,setTheme} = {...props};
  return (
    <>
      <div>
        Page Layout works
      </div>
      <div className="bg-bg1 text-text">
        Theme is: {theme}
        <Button onClick={()=>setTheme(THEME[(THEME.indexOf(theme)+1)%THEME.length])}>
          cycle Theme
        </Button>
      </div>
    </>
  )
}