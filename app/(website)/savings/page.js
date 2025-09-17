import SavingsClientComponent from "@/components/ui/SavingsClientContent";
import { auth } from "@/lib/auth";
import User from "@/models/User";
import { redirect } from "next/navigation";
import db from "@/lib/db";

const Savings = async () => {
    const session = await auth()
    if (!session) redirect('/')

    let userSavings = 0;
    try {
        await db.connect();
        const user = await User.findOne({ email: session.user.email })
        if (user) {
            userSavings = user.savings;
        }
    } catch (error) {
        console.log("Failed to fetch user's savings", error)
    }

    return <SavingsClientComponent savings={userSavings} />
}

export default Savings;