import React, { Children } from "react";
import { Analytics } from "@vercel/analytics/next"

const layout = ({ children }) => {
    return (
        <div>
            {children}
            <Analytics />
        </div>
    )
}

export default layout;