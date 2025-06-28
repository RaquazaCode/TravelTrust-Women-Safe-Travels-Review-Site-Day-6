"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Travel Solo, <span className="text-primary">Not Scared</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover safe accommodations, restaurants, and attractions through verified reviews from fellow solo female
            travelers. Your safety is our priority.
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2 p-2 bg-white rounded-lg shadow-lg">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Where are you traveling to?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-0 focus-visible:ring-0 text-lg"
                />
              </div>
              <Button type="submit" size="lg" className="px-8">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>Popular destinations:</span>
            {["Lisbon", "Barcelona", "Amsterdam", "Prague", "Bali"].map((city) => (
              <button
                key={city}
                onClick={() => router.push(`/search?q=${city}`)}
                className="text-primary hover:underline"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
