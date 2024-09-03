import supabase from "./supabase";

export interface CategoriesType {
  id: number;
  name: string;
}

export async function getCategories(): Promise<CategoriesType[]> {
  const { data, error } = await supabase.from("categories").select();
  if (error) throw new Error("failed to get categories");

  return data;
}

export async function getCategoryPerTip() {
  const { data: categories, error } = await supabase.from("categories").select(`
    name,
    tips (
      *
    )
  `);
  console.log(categories);
  return categories;
}
