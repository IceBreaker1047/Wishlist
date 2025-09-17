'use server'
import wishlist from "@/models/Wishlist";
import db from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import User from "@/models/User";

export const CreateWishList = async (FormData) => {

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

export const addMoneyAction = async (FormData) => {
  const session = await auth();
  if (!session || !session.user || !session.user.email) {
    redirect('/')
  }
  const { amount } = Object.fromEntries(FormData);
  const parsedAmount = Number(amount);

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    redirect('/')
  }
  try {
    await db.connect();
    await User.findOneAndUpdate(
      { email: session.user.email },
      { $inc: { savings: parsedAmount } },
      { new: true, upsert: true }
    )
  } catch (error) {
    console.log("Error adding money: ", error)
    throw new Error("Failed to add money to the account.");
  }
  revalidatePath("/savings")
  redirect("/savings")
}

export const withdrawMoneyAction = async (FormData) => {
  const session = await auth();
  if (!session || !session.user || !session.user.email) {
    redirect('/')
  }
  const { wAmount } = Object.fromEntries(FormData);
  const parsedAmount = Number(wAmount);

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    redirect('/')
  }
  try {
    await db.connect();
    await User.findOneAndUpdate(
      { email: session.user.email },
      { $inc: { savings: -parsedAmount } },
      { new: true, upsert: true }
    )
  } catch (error) {
    console.log("Error withdrawing money: ", error)
    throw new Error("Failed to withdraw money to the account.");
  }
  revalidatePath("/savings")
  redirect("/savings")
}