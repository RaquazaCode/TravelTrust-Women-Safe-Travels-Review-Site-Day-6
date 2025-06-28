"use client"

import { useState } from "react"
import { Star, ThumbsUp, Flag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { mockReviews } from "@/lib/mock-data"

interface ReviewsListProps {
  listingId: number
}

export function ReviewsList({ listingId }: ReviewsListProps) {
  const [showAll, setShowAll] = useState(false)
  const reviews = mockReviews.filter((review) => review.listingId === listingId)
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Reviews ({reviews.length})</CardTitle>
        <Button variant="outline">Write a Review</Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium">{review.userName}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{review.date}</span>
                      <span>•</span>
                      <span>Solo traveler</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{review.overallScore}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {review.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-gray-700 mb-3">{review.text}</p>

                <div className="flex items-center gap-4 text-sm">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful ({review.helpfulCount})
                  </button>
                  <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                    <Flag className="h-4 w-4" />
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {reviews.length > 3 && !showAll && (
          <Button variant="outline" onClick={() => setShowAll(true)} className="w-full">
            Show All Reviews ({reviews.length})
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
