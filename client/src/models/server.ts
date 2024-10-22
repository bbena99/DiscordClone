import { ChannelI } from "./";

export interface ServerI{
  name:string;
  nameNoSpace:string;
  key:string;
  src?:string;
  folders:{
    name:string;
    channels:ChannelI[];
  }[]
}

export function blankData():ServerI[]{
  return [
    {
      name:'test 1',
      nameNoSpace:'test-1',
      key:'key1',
      folders:[
        {
          name:'folder 1',
          channels:[]
        }
      ]
    },{
      name:'test 2',
      nameNoSpace:'test-2',
      key:'key2',
      src:'https://i.chzbgr.com/full/9409718784/hEE5F1AB2/packaged-goods-stay-hydrated-this-is-threat',
      folders:[
        {
          name:'folder 2',
          channels:[]
        }
      ]
    }
  ]
}