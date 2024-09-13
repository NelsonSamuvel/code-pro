import supabase from "./supabase";
import { ProfilesType } from "../types/api/apiTips.type";

export interface TipsType {
  category_id: number;
  content: string;
  created_at: Date | string;
  id: number;
  image: string | null;
  title: string;
  updated_at?: Date | null;
  user_id: string;
  profiles?: ProfilesType;
  categories?: CategoriesType;
}

export async function getTips() {
  const { data, error } = await supabase
    .from("tips")
    .select("*, profiles(*), categories(*)");
  if (error) throw new Error("Failed to fetch tips");
  return data;
}

export async function addTip(newTip: TipsType): Promise<TipsType> {
  const { data, error } = await supabase
    .from("tips")
    .insert([newTip])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function getMyTips(user_id: string) {
  const { data, error } = await supabase
    .from("tips")
    .select("*, category : categories(id,name)")
    .eq("user_id", user_id);

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteTips(id: number) {
  const { error } = await supabase.from("tips").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
