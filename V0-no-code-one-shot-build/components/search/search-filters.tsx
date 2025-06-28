"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchFiltersProps {
  filters: {
    safetyScore: number[]
    priceRange: number[]
    amenities: string[]
    type: string
  }
  onFiltersChange: (filters: any) => void
}

export function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
  const amenities = [
    "24h Front Desk",
    "Security Cameras",
    "Well-lit Entrance",
    "Female Staff",
    "Safe Neighborhood",
    "Public Transport Nearby",
    "Emergency Contact",
    "Keycard Access",
  ]

  const updateFilters = (key: string, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-sm font-medium mb-3 block">Accommodation Type</Label>
            <Select value={filters.type} onValueChange={(value) => updateFilters("type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hotel">Hotels</SelectItem>
                <SelectItem value="hostel">Hostels</SelectItem>
                <SelectItem value="apartment">Apartments</SelectItem>
                <SelectItem value="guesthouse">Guesthouses</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">
              Safety Score: {filters.safetyScore[0]} - {filters.safetyScore[1]}
            </Label>
            <Slider
              value={filters.safetyScore}
              onValueChange={(value) => updateFilters("safetyScore", value)}
              max={5}
              min={0}
              step={0.1}
              className="w-full"
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">
              Price Range: €{filters.priceRange[0]} - €{filters.priceRange[1]}
            </Label>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => updateFilters("priceRange", value)}
              max={500}
              min={0}
              step={10}
              className="w-full"
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">Safety Features</Label>
            <div className="space-y-3">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={filters.amenities.includes(amenity)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateFilters("amenities", [...filters.amenities, amenity])
                      } else {
                        updateFilters(
                          "amenities",
                          filters.amenities.filter((a: string) => a !== amenity),
                        )
                      }
                    }}
                  />
                  <Label htmlFor={amenity} className="text-sm">
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
