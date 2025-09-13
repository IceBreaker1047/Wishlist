"use client";
import React from "react";
import CountUp from "react-countup";

const Counter = ({ end }) => {
    return (
        <span className="text-white text-5xl mx-2">
            <CountUp
                start={0}
                end={end}
                duration={1}
            />
            %
        </span>
    )
}

export default Counter