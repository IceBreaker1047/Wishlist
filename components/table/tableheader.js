import React from "react";

const TableHeader = () => {
    return (
        <thead className="text-white">
            <tr>
                <th className="py-3 px-4 border-b-3 border-white text-center">Name</th>
                <th className="py-3 px-4 border-b-3 border-white text-center">Purchased</th>
                <th className="py-3 px-4 border-b-3 border-white text-center">Price</th>
                <th className="py-3 px-4 border-b-3 border-white text-center">Actions</th>
            </tr>
        </thead>
    )
}

export default TableHeader