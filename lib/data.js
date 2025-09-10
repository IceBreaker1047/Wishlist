'use server'
import Wishlist from "@/models/Wishlist"
import db from "./db"

export const getWishList = async (query = '') => {
    try {
        await db.connect();

        const searchQuery = query ? { itemName: { $regex: query, $options: 'i' } } : {}

        const items = await Wishlist.find(searchQuery)
        return items
    } catch (error) {
        console.log("Error " + error)
        throw new error("Failed to get wishlist items " + error)
    }
}

export const getItemById = async (id) => {
    try {
        await db.connect()
        const getItem = await Wishlist.findById(id)
        return getItem
    } catch (error) {
        console.log("Error" + error)
        throw new error("Failed to get wishlist item" + error)
    }
}