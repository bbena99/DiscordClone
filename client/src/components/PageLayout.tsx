import { Outlet } from "react-router-dom";

export function PageLayout():JSX.Element{
  return (
    <div className="w-full h-screen text-text">
      <Outlet/>
    </div>
  )
}