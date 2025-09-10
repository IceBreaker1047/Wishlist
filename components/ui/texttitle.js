import React from "react";

const TitleText = ({title, subtitle}) =>{
    return(
        <div className="flex items-center flex-col w-full space-y-2 justify-center text-gray-300">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">{title}</h1>
            <p className="leading-relaxed tracking-tight">{subtitle}</p>
        </div>
    )
}

export default TitleText;