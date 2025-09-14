import Counter from "@/components/ui/counter";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const Savings = async () => {
    const session = await auth()
    if (!session) redirect('/')

    return (
        <div className="flex flex-col items-center h-screen">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="text-gray-400 text-xl text-center mb-16 whitespace-nowrap flex items-baseline">
                    You have saved <Counter
                        end="69"
                    />
                    of your wishlist
                </div>

                <div style={{ transform: "scale(1.5)", transformOrigin: "center" }}>
                    <Image
                        src="/Images/Jar.png"
                        alt="Image of a jar"
                        height={500}
                        width={200}
                    />
                </div>

                <div className="flex gap-5 mt-10 relative z-10">
                    <div className="text-white">
                        <button className="text-lg border-1 p-2 rounded-lg hover:bg-red-500 hover:cursor-pointer ease-in-out duration-300 flex items-center justify-center gap-1 hover:text-black text-semibold">
                            <FiMinusCircle />
                            <div>Withdraw</div>
                        </button>
                    </div>
                    <div className="text-white">
                        <button className="text-lg border-1 p-2 rounded-lg hover:bg-white hover:cursor-pointer ease-in-out duration-300 flex items-center justify-center gap-1 hover:text-black text-semibold">
                            <FiPlusCircle />
                            <div>Add Money</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Savings;