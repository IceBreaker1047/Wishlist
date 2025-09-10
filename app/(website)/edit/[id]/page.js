import FormInput from "@/components/form/forminput";
import FormSelect from "@/components/form/formselect";
import FormTextArea from "@/components/form/formtextarea";
import FormUI from "@/components/form/formui";
import PageText from "@/components/ui/pagetext";
import PageWrapper from "@/components/ui/pagewrapper";
import { updateWishItem } from "@/lib/action";
import { getItemById } from "@/lib/data";
import React from "react";

const EditItemPage = async ({ params }) => {
    let item = null
    if (params.id) {
        item = await getItemById(params.id)
    }
    return (
        <PageWrapper>
            <PageText
                text={'Update your Wishlist item'}
            />
            <FormUI
                action={updateWishItem}>
                <input hidden id="id" name="id" defaultValue={item.id} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                        item={item.itemName}
                        name="itemName"
                        type="text"
                        label={"Item Name"}
                        required
                    />
                    <FormTextArea
                        id="notes"
                        name="Notes"
                        item={item.notes}
                        label={"Notes"}
                        rows={4}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                        id="price"
                        name="price"
                        label={'Price'}
                        item={item.price}
                        required
                    />
                    <FormInput
                        id="url"
                        name="url"
                        label={'URL'}
                        item={item.url}
                    />
                </div>
                <div>
                    <FormSelect
                        id="purchased"
                        name="purchased"
                        options={[
                            { value: '', label: 'Select' },
                            { value: 'Yes', label: 'Yes' },
                            { value: 'No', label: 'No' }
                        ]}
                        required
                        defaultValue={item.purchased}
                        item={item?.purchased}
                        label={'Purchased'}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 border-2 border-white p-2 rounded-lg hover:cursor-pointer hover:bg-white hover:text-black ease-in-out duration-500"
                >
                    Edit Item
                </button>
            </FormUI>
        </PageWrapper>
    )
}

export default EditItemPage