import { ChannelI } from "./";

export interface ServerI{
  name:string;
  nameNoSpace:string;
  key:string;
  channels:ChannelI
}