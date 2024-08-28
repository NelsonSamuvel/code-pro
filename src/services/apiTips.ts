import supabase from "./supabase";

//Types
import { TipsType } from "../types/api/apiTips.type";

export async function getTips(): Promise<TipsType[]> {
  const { data, error } = await supabase.from("tips").select();
  if (error) throw new Error("Failed to fetch tips");
  console.log(data);
  return data;
}
