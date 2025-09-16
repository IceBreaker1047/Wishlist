"use client"
import React from "react";
import { signOut } from "next-auth/react"

const SignOutbtn = () => {

    const handleSignOut = async () => {
        await signOut();
    }

    return (
        <button className="text-white text-lg border-2 border-white p-2 rounded-lg hover:cursor-pointer hover:text-black hover:bg-white ease-in-out duration-300"
            onClick={handleSignOut}>Sign Out</button>
    )
}

export default SignOutbtn