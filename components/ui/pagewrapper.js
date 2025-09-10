import React from "react";
import Box from "./box";

const PageWrapper = ({children})=>{
    return(
        <div className="w-full min-h-screen p-4">
            <Box>
                {children}
            </Box>
        </div>
    )
}

export default PageWrapper;