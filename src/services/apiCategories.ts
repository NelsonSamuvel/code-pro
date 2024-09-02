import supabase from "./supabase";

export interface CategoriesType {
  id: number;
  name: string;
}

export async function getCategories(): Promise<CategoriesType[]> {
  const { data, error } = await supabase.from("categories").select();
  console.log(data);
  if (error) throw new Error("failed to get categories");

  return data;
}
