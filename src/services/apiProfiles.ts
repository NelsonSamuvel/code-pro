import { checkAuth } from "./apiAuth";
import supabase from "./supabase";

export interface ProfilesType {
  id: number;
  username: string;
  avatar: string | null;
  user_id: string;
  bio: string;
}

export async function getProfile(): Promise<ProfilesType> {
  const user = await checkAuth();

  if (!user?.id) throw new Error("User Id not found");

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

type PropsType = {
  id?: string;
  username: string;
  bio: string;
  password: string;
};

export async function updateProfile({
  id,
  username,
  bio,
  password,
}: PropsType) {
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .update({ username, bio })
    .eq("user_id", id)
    .select();

  if (profileError) throw new Error(profileError.message);

  if (password) {
    const { data: user, error } = await supabase.auth.updateUser({ password });
    if (error) throw new Error(error.message);
    return user;
  }

  return profile;
}
