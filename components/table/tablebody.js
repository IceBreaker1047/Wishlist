import Link from "next/link";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { deleteWishItem } from "@/lib/action";

const TableBody = ({ wishlist }) => {
    return (
        <tbody>
            {
                wishlist.length == 0 ? (
                    <tr>
                        <td colSpan="4" className="col-span-4 py-4 text-center text-gray-400">
                            Start by creating an item in your wishlist
                        </td>
                    </tr>
                ) : (
                    wishlist.map((item, index) => (
                        <tr key={index}>
                            <td className="py-3 px-4 border-white text-center">{item.itemName}</td>
                            <td className="py-3 px-4 border-white text-center">{item.purchased}</td>
                            <td className="py-3 px-4 border-white text-center">{item.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'INR',
                            })}</td>
                            <td className="py-3 px-4 border-white text-center flex items-center justify-center space-x-3">
                                <Link href={`/edit/${item.id}`} className="text-white hover:text-gray-300">
                                    <FiEdit2 className="w-4 h-4" />
                                </Link>
                                <form
                                    action={deleteWishItem}
                                >
                                    <input hidden name="id" id="id" defaultValue={item.id} />
                                    <button className="text-white hover:cursor-pointer hover:text-red-500">
                                        <FiTrash className="w-4 h-4" />
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ))
                )
            }
        </tbody >
    )
}

export default TableBody