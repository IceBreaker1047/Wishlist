"use client";
import FormInput from "@/components/form/forminput";
import React, { useState } from "react";
import { addMoneyAction } from "@/lib/action";
import { useRouter } from "next/navigation";

const AddMoney = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);

        try {
            await addMoneyAction(formData);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen items-center justify-center flex">
            <div className="text-white text-2xl p-7 border-3 border-white rounded-xl">
                <div className="font-extrabold items-center mb-2">ADD MONEY</div>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name="amount"
                        type="number"
                        placeholder="Enter amount"
                        required
                    />
                    <div className="flex justify-center mt-2">
                        <button
                            className="mt-2 border-2 border-white p-2 rounded-lg hover:text-black hover:bg-white hover:cursor-pointer ease-in-out duration-300"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Adding..." : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMoney;