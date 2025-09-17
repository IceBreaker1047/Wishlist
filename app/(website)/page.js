import SignInbtn from "@/components/ui/signinbtn";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import { SiApple, SiGoogle, SiInstagram, SiReddit } from "react-icons/si";

const Home = async () => {

    const session = await auth();
    if (session) redirect('/wishlist')

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-white text-lg border-3 border-white h-100 w-100 rounded-xl p-2">
                <h1 className="flex justify-center mb-7 text-3xl font-extrabold border-b-1 p-3">SIGN IN</h1>
                <SignInbtn
                    provider="Google"
                    icon={SiGoogle}
                />
                <SignInbtn
                    provider="Apple"
                    icon={SiApple}
                />
                <SignInbtn
                    provider="Reddit"
                    icon={SiReddit}
                />
            </div>
        </div>
    )
}

export default Home;