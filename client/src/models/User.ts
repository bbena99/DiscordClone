export interface UserI{
  name:string;
  nameNoSpace:string;
  key:string;
  friendKeys:string[];
  directMessageKeys:string[];
}

export function staticUsers():UserI{
  return {
    name:'Static User',
    nameNoSpace:'Static-User',
    key:'ABCD1234',
    friendKeys:[
      'ABCD',
      '1234',
    ],
    directMessageKeys:[
      'XYZ',
      '987',
    ]
  }
}