"use client"

import { useState } from "react"
import { User, MapPin, Star, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/hooks/use-auth"

export function UserProfile() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("reviews")

  const userStats = {
    reviewsCount: 12,
    helpfulVotes: 89,
    countriesVisited: 8,
    memberSince: "January 2023",
  }

  const myReviews = [
    {
      id: 1,
      listingName: "Hotel Lisboa Plaza",
      city: "Lisbon",
      date: "2024-01-15",
      score: 4.8,
      helpfulVotes: 23,
    },
    {
      id: 2,
      listingName: "Casa do Bacalhau",
      city: "Lisbon",
      date: "2024-01-08",
      score: 4.6,
      helpfulVotes: 18,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-2">{user?.name}</h2>
                <p className="text-gray-600 mb-4">{user?.email}</p>

                {user?.isVerified ? (
                  <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">✓ Verified Traveler</Badge>
                ) : (
                  <Badge variant="outline" className="mb-4">
                    Verification Pending
                  </Badge>
                )}

                <Button variant="outline" className="w-full bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Travel Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Reviews Written</span>
                  <span className="font-semibold">{userStats.reviewsCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Helpful Votes</span>
                  <span className="font-semibold">{userStats.helpfulVotes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Countries Visited</span>
                  <span className="font-semibold">{userStats.countriesVisited}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="font-semibold">{userStats.memberSince}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="reviews">My Reviews</TabsTrigger>
                <TabsTrigger value="saved">Saved Places</TabsTrigger>
                <TabsTrigger value="trips">My Trips</TabsTrigger>
              </TabsList>

              <TabsContent value="reviews" className="space-y-4">
                {myReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{review.listingName}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{review.city}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 font-medium">{review.score}</span>
                          </div>
                          <div className="text-sm text-gray-600">{review.date}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{review.helpfulVotes} people found this helpful</div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="saved" className="space-y-4">
                <div className="text-center py-12">
                  <p className="text-gray-500">No saved places yet</p>
                  <p className="text-sm text-gray-400 mt-2">Save places while browsing to see them here</p>
                </div>
              </TabsContent>

              <TabsContent value="trips" className="space-y-4">
                <div className="text-center py-12">
                  <p className="text-gray-500">No trips planned yet</p>
                  <p className="text-sm text-gray-400 mt-2">Create your first trip itinerary</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
