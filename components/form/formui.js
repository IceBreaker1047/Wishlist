import React from "react";

const FormUI = ({action, children})=>{
    return (
        <div className="text-white">
            <form action={action} className="space-y-6 items-center p-4 rounded">
                {children}
            </form>
        </div>
    )
}

export default FormUI;