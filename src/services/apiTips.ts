import supabase from "./supabase";

//Types
import { TipsType } from "../types/api/apiTips.type";

export async function getTips() {
  const { data, error } = await supabase.from("tips").select("*, profiles(*)");
  if (error) throw new Error("Failed to fetch tips");
  return data;
}
