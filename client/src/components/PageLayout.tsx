import { Outlet } from "react-router-dom";

export function PageLayout():JSX.Element{
  return (
    <div className="w-full h-screen bg-bg2 text-text">
      <Outlet/>
    </div>
  )
}