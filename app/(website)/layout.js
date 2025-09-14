import React, { Children } from "react";
import { Analytics } from "@vercel/analytics/next"

const layout = ({ children }) => {
    return (
        <div>
            <header className="p-6 text-gray-400 text-3xl">
                <div className="max-w-screen-lg mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
                    <div className="gap-50 flex lg:gap-150">
                        <div className="hover:cursor-pointer hover:text-white">Savings</div>
                        <div className="hover:cursor-pointer hover:text-white">Wishlist</div>
                    </div>
                </div>
            </header>
            {children}
            <Analytics />
        </div>
    )
}

export default layout;