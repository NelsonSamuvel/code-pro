import supabase from "./supabase";

//Types
import { TipsType } from "../types/api/apiTips.type";

export async function getTips() {
  const { data, error } = await supabase
    .from("tips")
    .select("*, profiles(*), categories(*)");
  if (error) throw new Error("Failed to fetch tips");
  return data;
}

export async function addTip(newTip: TipsType) {
  const { data, error } = await supabase.from("tips").insert([newTip]).select();

  if (error) throw new Error(error.message);

  return data;
}

// export async function getSingleCategoryTip(id: number) {
//   const { data, error } = await supabase
//     .from("tips")
//     .select("*")
//     .eq("category_id", id);

//   if (error) throw new Error(error.message);

//   return data;
// }
