import React from "react";

const ItemTable = ({ children }) => {
    return (
        <table className="w-full text-sm text-gray-300">{children}</table>
    )
}

export default ItemTable