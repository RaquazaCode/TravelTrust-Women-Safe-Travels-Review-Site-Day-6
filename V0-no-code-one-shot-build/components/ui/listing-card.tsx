import Image from "next/image"
import Link from "next/link"
import { Star, Shield, MapPin, Wifi, Car, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SafetyScoreBadge } from "@/components/ui/safety-score-badge"

interface ListingCardProps {
  listing: {
    id: number
    name: string
    type: string
    city: string
    address: string
    safetyScore: number
    reviewCount: number
    pricePerNight: number
    image: string
    amenities: string[]
    isCertified: boolean
    tags: string[]
  }
}

export function ListingCard({ listing }: ListingCardProps) {
  const amenityIcons = {
    WiFi: Wifi,
    Parking: Car,
    Breakfast: Coffee,
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex">
        <div className="relative w-64 h-48 flex-shrink-0">
          <Image src={listing.image || "/placeholder.svg"} alt={listing.name} fill className="object-cover" />
          {listing.isCertified && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <Shield className="h-3 w-3 mr-1" />
                Solo-Certified
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="flex-1 p-6">
          <div className="flex justify-between items-start mb-3">
            <div>
              <Link href={`/listing/${listing.id}`}>
                <h3 className="text-xl font-semibold hover:text-primary cursor-pointer">{listing.name}</h3>
              </Link>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">
                  {listing.address}, {listing.city}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">€{listing.pricePerNight}</div>
              <div className="text-sm text-gray-600">per night</div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <SafetyScoreBadge score={listing.safetyScore} />
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-medium">{listing.safetyScore}</span>
              <span className="text-gray-500 ml-1">({listing.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {listing.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            {listing.amenities.slice(0, 3).map((amenity, index) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons]
              return (
                <div key={index} className="flex items-center">
                  {Icon && <Icon className="h-4 w-4 mr-1" />}
                  <span>{amenity}</span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
