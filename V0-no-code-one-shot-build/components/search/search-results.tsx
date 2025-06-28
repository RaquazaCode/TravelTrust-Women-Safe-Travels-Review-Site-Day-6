"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ListingCard } from "@/components/ui/listing-card"
import { mockListings } from "@/lib/mock-data"

interface SearchResultsProps {
  filters: any
}

export function SearchResults({ filters }: SearchResultsProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [listings, setListings] = useState(mockListings)

  useEffect(() => {
    // Filter listings based on search query and filters
    let filtered = mockListings

    if (query) {
      filtered = filtered.filter(
        (listing) =>
          listing.city.toLowerCase().includes(query.toLowerCase()) ||
          listing.name.toLowerCase().includes(query.toLowerCase()),
      )
    }

    // Apply safety score filter
    filtered = filtered.filter(
      (listing) => listing.safetyScore >= filters.safetyScore[0] && listing.safetyScore <= filters.safetyScore[1],
    )

    // Apply type filter
    if (filters.type !== "all") {
      filtered = filtered.filter((listing) => listing.type === filters.type)
    }

    setListings(filtered)
  }, [query, filters])

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        {listings.length} results found {query && `for "${query}"`}
      </div>

      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}

      {listings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No results found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}
