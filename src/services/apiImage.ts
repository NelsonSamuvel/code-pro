import { checkAuth } from "./apiAuth";
import supabase from "./supabase";

export async function uploadImage(file: File[]) {
  const user = await checkAuth();

  if (!user?.id) throw new Error("user not found");

  const imgFile = file[0];
  const fileName = user.email + "-" + imgFile.name;

  const { error } = await supabase.storage
    .from("thumbnails")
    .upload(fileName, imgFile, {
      upsert: true,
    });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  const { data: imageLink } = supabase.storage
    .from("thumbnails")
    .getPublicUrl(fileName);

  console.log(imageLink.publicUrl);

  return imageLink.publicUrl;
}
