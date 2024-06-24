export interface User {
  name: string;
  interests?: string[];
  friends?: string[];
  userId:string;
  id:string
  currentUserId?:string
}

export interface Friend {
  id?: string;
  name: string;
  interests: string[];
  userId?:string;
}
interface Community {
  id: string;
  name: string;
  creator: string;
  members: string[];
  tags: string[];
  privateCommunity: boolean;
}