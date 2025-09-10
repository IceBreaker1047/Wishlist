import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const PageText = ({text}) =>{
    return(
        <div className="flex items-center space-x-6">
            <Link href={'/'}
            className="mb-2 text-gray-300">
                <FiArrowLeft size={32}/>
            </Link>
            <h1 className="text-white font-bold text-3xl mb-5">{text}</h1>
        </div>
    )
}

export default PageText