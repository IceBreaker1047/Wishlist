import Header from "@/components/ui/header";
import React, { Children } from "react";
import { Analytics } from "@vercel/analytics/next"

const layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Analytics />
        </div>
    )
}

export default layout;