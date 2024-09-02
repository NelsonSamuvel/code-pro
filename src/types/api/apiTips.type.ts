export interface ProfilesType {
  id: number;
  username: string;
  avatar: string | null;
  user_id: string;
  bio: string;
}

export interface TipsType {
  category_id: number;
  content: string;
  created_at: Date | string;
  id?: number;
  image: string | null;
  title: string;
  updated_at?: Date | null;
  user_id: string | undefined;
  profiles?: ProfilesType;
}
