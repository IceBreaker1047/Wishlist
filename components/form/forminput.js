import React from "react";

const FormInput = ({ id, label, placeholder, name, type, required, item }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
            <input
                placeholder={placeholder}
                id={id}
                name={name}
                type={type}
                required={required}
                defaultValue={item}
                className="mt-1 block w-full rounded-lg shadow-sm p-2 bg-gray-800 outline-none"
            />
        </div>
    )
}

export default FormInput