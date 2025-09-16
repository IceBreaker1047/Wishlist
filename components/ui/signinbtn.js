import React from "react";
import { auth, signIn } from "@/lib/auth";

const SignInbtn = ({ provider, icon: Icon }) => {
    return (
        <div>
            < form
                action={async () => {
                    "use server"
                    await signIn(provider.toLowerCase())
                }
                }
            >
                <button className="flex items-center justify-center gap-3 border-2 p-2 rounded-lg hover:bg-white hover:text-black ease-in-out duration-300 hover:cursor-pointer w-full mb-4"><Icon />Sign In With {provider}</button>
            </form>
        </div>
    )
}

export default SignInbtn