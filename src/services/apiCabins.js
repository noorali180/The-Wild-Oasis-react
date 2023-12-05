import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Cabins could not be loaded");

  return data;
}

export async function deleteCabin(id) {
  // 1. delete cabin row from cabin table...
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Cabin could not be deleted");

  // 2. if there is no error, delete the image from bucket also...
  const imageName = data.image.slice(data.image.lastIndexOf("/") + 1);
  await supabase.storage.from("cabins").remove([imageName]);

  return data;
}

export async function createEditCabin(newCabin, id = null) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  let query = supabase.from("cabins");

  //1. create and edit cabin

  //NOTE: if here is no id insert a new cabin to database,
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //NOTE: if there is an id edit the cabin,
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) throw new Error("Cabin could not be created");

  //2. upload image to bucket
  // if (hasImagePath) return data;
  if (hasImagePath) return;

  const { error: imgUploadingError } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image);

  //3. if image is not uploaded then delete the created cabin.
  if (imgUploadingError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}
