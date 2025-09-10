'use client';
import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", "1")
        if (term) {
            params.set("query", term)
        }
        else {
            params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)
    return (
        <div className="flex items-center w-full justify-center">
            <div className="relative w-full mx-auto">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-2 px-1 rounded-lg bg-transparent text-gray-300 focus:outline-none focus:ring-2"
                    onChange={(e) => handleSearch(e.target.value)}
                    defaultValue={searchParams.get("query")?.toString}
                />
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:cursor-pointer">
                    <FiSearch size={20} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;