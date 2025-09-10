'use server'
import wishlist from "@/models/Wishlist";
import db from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const CreateWishList = async (FormData) => {
  // Convert FormData to a plain object

  const { itemName, notes, price, url, purchased } = Object.fromEntries(FormData)

  try {
    await db.connect();
    const newWishItem = new wishlist({
      itemName,
      notes,
      price,
      url,
      purchased
    });
    await newWishItem.save();
  } catch (error) {
    console.error("Error creating wishlist item: ", error);
    throw new Error("Failed to create wishlist item.");
  }

  revalidatePath("/");
  redirect("/");
};


export const updateWishItem = async (FormData) => {
  const { id, itemName, notes, price, url, purchased } =
    Object.fromEntries(FormData)
  try {
    db.connect()
    const updateFields = {
      itemName, notes, price, url, purchased
    }
    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key])
    await wishlist.findByIdAndUpdate(id, updateFields)
  } catch (error) {
    throw new Error("Failed To Update Wishlist Item " + error)
  }
  revalidatePath("/")
  redirect("/")
}

export const deleteWishItem = async (FormData) => {
  const { id } = Object.fromEntries(FormData)
  try {
    db.connect()
    await wishlist.findByIdAndDelete(id)
  } catch (error) {
    throw new Error("Failed To WishlistItem " + error)

  }
  revalidatePath("/")

}