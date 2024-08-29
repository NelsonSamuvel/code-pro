import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select();
  console.log(data);
  if (error) throw new Error("failed to get categories");

  return data;
}
