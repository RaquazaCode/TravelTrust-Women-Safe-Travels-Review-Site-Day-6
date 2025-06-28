import { Header } from "@/components/layout/header"
import { ListingDetail } from "@/components/listing/listing-detail"
import { mockListings } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface ListingPageProps {
  params: {
    id: string
  }
}

export default function ListingPage({ params }: ListingPageProps) {
  const listing = mockListings.find((l) => l.id === Number.parseInt(params.id))

  if (!listing) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ListingDetail listing={listing} />
      </main>
    </div>
  )
}
