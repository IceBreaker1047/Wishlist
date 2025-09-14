import React from "react";
import Box from "./box";

const Header = () => {
    return (
        <header className="p-6 text-gray-400 text-3xl">
            <Box>
                <div className="gap-50 flex lg:gap-150">
                    <div className="hover:cursor-pointer hover:text-white">Savings</div>
                    <div className="hover:cursor-pointer hover:text-white">Wishlist</div>
                </div>
            </Box>
        </header>
    )
}

export default Header;