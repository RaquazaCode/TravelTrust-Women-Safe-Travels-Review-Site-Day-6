"use client"

import Image from "next/image"
import { Star, Shield, MapPin, Wifi, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SafetyScoreBadge } from "@/components/ui/safety-score-badge"
import { ReviewsList } from "@/components/listing/reviews-list"
import { SafetyBreakdown } from "@/components/listing/safety-breakdown"

interface ListingDetailProps {
  listing: any
}

export function ListingDetail({ listing }: ListingDetailProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src={listing.image || "/placeholder.svg"} alt={listing.name} fill className="object-cover" />
            {listing.isCertified && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <Shield className="h-4 w-4 mr-2" />
                  Solo-Certified Business
                </Badge>
              </div>
            )}
          </div>

          {/* Basic Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{listing.name}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>
                {listing.address}, {listing.city}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <SafetyScoreBadge score={listing.safetyScore} size="lg" />
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 font-medium text-lg">{listing.safetyScore}</span>
                <span className="text-gray-500 ml-2">({listing.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {listing.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Safety Breakdown */}
          <SafetyBreakdown listing={listing} />

          {/* Reviews */}
          <ReviewsList listingId={listing.id} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Book Your Stay</span>
                <span className="text-2xl font-bold">€{listing.pricePerNight}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Book on Booking.com
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <ExternalLink className="h-4 w-4 mr-2" />
                Check Airbnb
              </Button>
              <p className="text-xs text-gray-500 text-center">We may earn a commission from bookings</p>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {listing.amenities.map((amenity: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <Wifi className="h-4 w-4 mr-3 text-gray-400" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Address:</strong> {listing.address}
                </p>
                <p>
                  <strong>City:</strong> {listing.city}
                </p>
                <p>
                  <strong>Type:</strong> {listing.type}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
