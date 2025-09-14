import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import { SiApple, SiGoogle, SiInstagram, SiReddit } from "react-icons/si";

const Home = async () => {

    const session = await auth();
    if (session) redirect('/wishlist')

    return (
        < form
            action={async () => {
                "use server"
                await signIn("google")
            }
            }
        >
            <div className="h-screen flex items-center justify-center">
                <div className="text-white text-lg border-3 border-white h-100 w-100 rounded-xl p-2">
                    <h1 className="flex justify-center mb-7 text-3xl font-extrabold border-b-1 p-3">SIGN IN</h1>
                    <button className="flex items-center justify-center gap-3 border-2 p-2 rounded-lg hover:bg-white hover:text-black ease-in-out duration-300 hover:cursor-pointer w-full mb-4"><SiGoogle />Sign In With Google</button>
                    <button className="flex items-center justify-center gap-3 border-2 p-2 rounded-lg hover:bg-white hover:text-black ease-in-out duration-300 hover:cursor-pointer w-full mb-4"><SiApple />Sign In With Apple</button>
                    <button className="flex items-center justify-center gap-3 border-2 p-2 rounded-lg hover:bg-white hover:text-black ease-in-out duration-300 hover:cursor-pointer w-full mb-4"><SiInstagram />Sign In With Instagram</button>
                    <button className="flex items-center justify-center gap-3 border-2 p-2 rounded-lg hover:bg-white hover:text-black ease-in-out duration-300 hover:cursor-pointer w-full mb-4"><SiReddit />Sign In With Reddit</button>
                </div>
            </div>
        </form >
    )
}

export default Home;