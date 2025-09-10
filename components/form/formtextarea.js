import React from "react";

const FormTextArea = ({ label, id, placeholder, rows, name, item }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
            <textarea
                placeholder={placeholder}
                className="mt-1 block w-full bg-gray-800 rounded-lg shadow-sm p-2 outline-none"
                id={id}
                name={name}
                rows={rows}
                defaultValue={item}
            />
        </div>
    )
}

export default FormTextArea