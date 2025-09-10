import React from "react";

const FormSelect = ({ id, label, name, options, defaultValue, item }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
            <select
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-800 h-10 p-2 text-gray-400"
                id={id}
                name={name}
                defaultValue={defaultValue}
                item={item}
            >{options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}</select>
        </div>
    )
}

export default FormSelect