import { Button } from "flowbite-react";
import { THEME } from "../constants";

interface SettingsPropsI{
  theme:string;
  setTheme:(t:string)=>void;
}
export function Settings(props:SettingsPropsI){
  const {theme,setTheme} = {...props};
  return <>
    <div>
      <div className="bg-bg1 text-text">
        Current Theme: {theme}
        <Button onClick={()=>setTheme(THEME[(THEME.indexOf(theme)+1)%THEME.length])}>
          cycle Theme
        </Button>
      </div>
    </div>
  </>
}