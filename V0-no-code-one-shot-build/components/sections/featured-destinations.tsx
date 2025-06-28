import Image from "next/image"
import Link from "next/link"
import { Star, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedDestinations() {
  const destinations = [
    {
      id: "lisbon",
      name: "Lisbon, Portugal",
      image: "/placeholder.svg?height=300&width=400",
      safetyScore: 4.8,
      reviewCount: 1247,
      highlights: ["Well-lit streets", "Friendly locals", "Safe public transport"],
    },
    {
      id: "barcelona",
      name: "Barcelona, Spain",
      image: "/placeholder.svg?height=300&width=400",
      safetyScore: 4.6,
      reviewCount: 2156,
      highlights: ["24/7 areas", "Tourist police", "Women-friendly"],
    },
    {
      id: "amsterdam",
      name: "Amsterdam, Netherlands",
      image: "/placeholder.svg?height=300&width=400",
      safetyScore: 4.9,
      reviewCount: 1834,
      highlights: ["Bike-friendly", "Safe canals", "English-speaking"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Top-Rated Safe Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore destinations loved by solo female travelers for their safety, accessibility, and welcoming
            atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/destination/${destination.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <Shield className="h-3 w-3 mr-1" />
                      Safe
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-medium">{destination.safetyScore}</span>
                    </div>
                    <span className="text-gray-500">({destination.reviewCount} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
