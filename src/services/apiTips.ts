import supabase from "./supabase";

//Types
import { TipsType } from "../types/api/apiTips.type";

export async function getTips() {
  const { data, error } = await supabase.from("tips").select("*, profiles(*)");
  if (error) throw new Error("Failed to fetch tips");
  return data;
}

export async function addTip(newTip: TipsType) {
  const { data, error } = await supabase.from("tips").insert([newTip]).select();

  if (error) throw new Error(error.message);

  return data;
}
