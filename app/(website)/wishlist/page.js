import React from "react"
import PageWrapper from "@/components/ui/pagewrapper"
import TitleText from "@/components/ui/texttitle"
import SearchBar from "@/components/ui/seacrhbar"
import Link from "next/link"
import { FiPlusCircle } from "react-icons/fi"
import ItemTable from "@/components/table/itemtable"
import TableHeader from "@/components/table/tableheader"
import { getWishList } from "@/lib/data"
import TableBody from "@/components/table/tablebody"
import CountUp from "react-countup"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

const HomePage = async ({ searchParams }) => {
  const query = searchParams?.query || ""
  const wishlist = await getWishList(query)

  const totalPrice = wishlist.reduce((acc, item) => {
    if (item.purchased == "No") {
      const itemPrice = parseFloat(item.price) || 0;
      return acc + itemPrice;
    }
    return acc;

  }, 0);

  const formattedTotal = totalPrice.toLocaleString('en-UK', {
    style: 'currency',
    currency: 'INR',
  });

  const session = await auth();
  if (!session) redirect('/')

  return (
    <PageWrapper>
      <div className="flex flex-col gap-6 w-full">
        <TitleText
          title="Wishlist"
          subtitle='" Keep going. Dreams do come true! "'
        />
      </div>
      <div className="flex items-center justify-between gap-8 p-4 text-white w-full">
        <SearchBar />
        <Link href={'/create'}
          className="flex">
          <FiPlusCircle size={32} className="hover:text-gray-300" />
        </Link>
      </div>
      <div className="text-white text-4xl">Total: {formattedTotal}</div>
      <div className="p-6 shadow-lg">
        <ItemTable>
          <TableHeader />
          <TableBody
            wishlist={wishlist}
          />
        </ItemTable>
      </div>
    </PageWrapper>
  )
}

export default HomePage