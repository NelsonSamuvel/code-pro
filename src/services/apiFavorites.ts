import { checkAuth } from "./apiAuth";
import { TipsType } from "./apiTips";
import supabase from "./supabase";

type FavoriteType = {
  id: number;
  tip_id: number;
  user_id: string;
};

export async function getFavorites(): Promise<TipsType[]> {
  const user = await checkAuth();
  if (!user?.id) throw new Error("User not found");

  const { data: favorites, error: favoritesErr } = await supabase
    .from("favorites")
    .select("tip_id")
    .eq("user_id", user.id);

  if (favoritesErr) throw new Error(favoritesErr.message);

  if (!favorites || !favorites?.length) return [];

  const extractedTips = favorites?.map((favorite) => favorite.tip_id);

  // return extractedTips;

  const { data: tips, error: tipsErr } = await supabase
    .from("tips")
    .select("*, categories(*)")
    .in("id", extractedTips);

  if (tipsErr) throw new Error(tipsErr.message);

  return tips || [];
}

export async function addToFavorites(
  tipId: number
): Promise<FavoriteType[] | null> {
  const user = await checkAuth();

  if (!user?.id) throw new Error("user not found");

  const { data: favorites, error: favoritesErr } = await supabase
    .from("favorites")
    .select("*")
    .eq("tip_id", tipId)
    .eq("user_id", user.id)
    .limit(1);

  if (favoritesErr) throw new Error(favoritesErr.message);

  let query;

  if (favorites.length > 0) {
    const { error: favoriteDeleteErr } = await supabase
      .from("favorites")
      .delete()
      .eq("id", favorites[0].id);
    if (favoriteDeleteErr) throw new Error(favoriteDeleteErr.message);
  } else {
    query = supabase.from("favorites").insert([
      {
        tip_id: tipId,
        user_id: user.id,
      },
    ]);
    const { data, error } = await query.select();
    if (error) throw new Error(error.message);
    return data;
  }
  return null;
}
