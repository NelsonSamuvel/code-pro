import supabase from "./supabase";
import { ProfilesType } from "../types/api/apiTips.type";
import { CategoriesType } from "./apiCategories";
import { checkAuth } from "./apiAuth";
import { uploadImage } from "./apiImage";
import { TipType } from "../features/tips/AddTipsForm";

export type TipsType = {
  category_id: number;
  content: string;
  created_at: Date | string;
  id?: number;
  image: string | null;
  title: string;
  updated_at?: Date | null;
  user_id: string;
  profiles?: ProfilesType;
  categories?: CategoriesType;
};

export async function getTips(): Promise<TipsType[]> {
  const { data, error } = await supabase
    .from("tips")
    .select("*, profiles(*), categories(*)");
  if (error) throw new Error("Failed to fetch tips");
  return data;
}

type AddTipType = {
  newTip: TipsType;
  categoryName: string;
  imageFile: File[];
};

export async function addTip({
  newTip,
  categoryName,
  imageFile,
}: AddTipType): Promise<TipsType> {
  const { data: category, error: categoryErr } = await supabase
    .from("categories")
    .select("*")
    .eq("name", categoryName)
    .single();

  if (categoryErr) throw new Error(categoryErr.message);

  const url = await uploadImage(imageFile);

  console.log(url);

  const addingTip = {
    ...newTip,
    image: url,
  };

  const { data, error } = await supabase
    .from("tips")
    .insert([{ ...addingTip, category_id: category.id }])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

type CategoryType = {
  category: CategoriesType;
};

type MyTipsType = TipsType & CategoryType;

export async function getMyTips(): Promise<MyTipsType[]> {
  const user = await checkAuth();

  if (!user?.id) throw new Error("Invalid user");

  const { data, error } = await supabase
    .from("tips")
    .select("*, category : categories(id,name,image)")
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  return data as MyTipsType[];
}

type UpdateTipType = {
  id?: number;
  editTips: {
    title: string;
    content: string;
    category_name: string;
    image: File[];
  };
};

export async function updateTips({ id, editTips }: UpdateTipType) {
  if (!id) return;

  const { data: category, error: categoryErr } = await supabase
    .from("categories")
    .select("*")
    .eq("name", editTips.category_name)
    .single();

  if (categoryErr) throw new Error(categoryErr.message);

  const imageUrl = await uploadImage(editTips.image);

  const updatingTip = {
    title: editTips.title,
    content: editTips.content,
    category_id: category.id,
    image: imageUrl,
  };

  const { data, error } = await supabase
    .from("tips")
    .update(updatingTip)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function deleteTips(id: number) {
  const { error } = await supabase.from("tips").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
