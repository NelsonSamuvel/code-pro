import supabase from "./supabase";

export async function getTips() {
  const { data, error } = await supabase.from("tips").select();
  if (error) throw new Error("Failed to fetch tips");
  return data;
}
