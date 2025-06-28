"use client"

import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { SearchResults } from "@/components/search/search-results"
import { SearchFilters } from "@/components/search/search-filters"
import { InteractiveMap } from "@/components/search/interactive-map"
import { useState } from "react"

function SearchPageContent() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list")
  const [filters, setFilters] = useState({
    safetyScore: [0, 5],
    priceRange: [0, 500],
    amenities: [],
    type: "all",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="w-80 flex-shrink-0">
            <SearchFilters filters={filters} onFiltersChange={setFilters} />
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Search Results</h1>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded ${viewMode === "list" ? "bg-primary text-white" : "bg-white"}`}
                >
                  List View
                </button>
                <button
                  onClick={() => setViewMode("map")}
                  className={`px-4 py-2 rounded ${viewMode === "map" ? "bg-primary text-white" : "bg-white"}`}
                >
                  Map View
                </button>
              </div>
            </div>

            {viewMode === "list" ? <SearchResults filters={filters} /> : <InteractiveMap filters={filters} />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  )
}
