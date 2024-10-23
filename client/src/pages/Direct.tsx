interface DirectPropsI{
  friends:string[];
  directMessages:string[]
}
export function Direct(props:DirectPropsI){
  const {friends,directMessages} = {...props}
  console.log('ping')
  return <>
    Direct.tsx works
  </>
}