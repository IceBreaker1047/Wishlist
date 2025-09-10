import PageWrapper from "@/components/ui/pagewrapper";
import React from "react";
import PageText from "@/components/ui/pagetext";
import FormUI from "@/components/form/formui";
import FormInput from "@/components/form/forminput";
import { CreateWishList } from "@/lib/action";
import FormTextArea from "@/components/form/formtextarea";
import FormSelect from "@/components/form/formselect";

const CreatePage = () => {
    return (
        <PageWrapper>
            <PageText
                text="Create Wishlist Item"
            />
            <FormUI
                action={CreateWishList}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                        label="Item Name"
                        placeholder="Name..."
                        name="itemName"
                        type="text"
                        required
                    />
                    <FormTextArea
                        label="Notes"
                        placeholder="Information about your Wishlist Item..."
                        id="notes"
                        name="notes"
                        rows="4"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                        id="price"
                        label="Price"
                        type="number"
                        placeholder="Price..."
                        name="price"
                        required
                    />
                    <FormInput
                        id="url"
                        label="Purchase URL"
                        type="text"
                        placeholder="URL to the website..."
                        name="url"
                    />
                </div>
                <FormSelect
                    label="Purchased"
                    id="purchased"
                    name="purchased"
                    options={[
                        { value: '', label: 'Select' },
                        { value: 'Yes', label: 'Yes' },
                        { value: 'No', label: 'No' }
                    ]}
                    required
                />
                <button
                    type="submit"
                    className="w-full px-4 border-2 border-white p-2 rounded-lg hover:cursor-pointer hover:bg-white hover:text-black ease-in-out duration-500"
                >
                    Add Item
                </button>
            </FormUI>
        </PageWrapper>
    )
}

export default CreatePage;