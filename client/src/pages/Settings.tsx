import { Button } from "flowbite-react";
import { THEME } from "../constants";

interface SettingsPropsI{
  theme:string;
  setTheme:(t:string)=>void;
}
export function Settings(props:SettingsPropsI){
  const {theme,setTheme} = {...props};
  return <>
    <div className="p-4">
      Current Theme: {theme}
      <div className="flex p-1 bg-bg2 text-text">
        {THEME.map((constTheme)=>{
          return (
            <Button
              key={constTheme+"_selector"}
              type="button"
              onClick={()=>{
                if(constTheme===theme)return;
                setTheme(constTheme);
                localStorage.setItem('theme',constTheme);
              }}
              className= {`w-14 h-14 m-2 rounded-full focus:ring-0 ${theme===constTheme?('border-4 border-bg1'):('')}`}
              style={{backgroundColor:`var(--color-${constTheme})`}}
            >{''}</Button>
          )
        })}
      </div>
    </div>
  </>
}