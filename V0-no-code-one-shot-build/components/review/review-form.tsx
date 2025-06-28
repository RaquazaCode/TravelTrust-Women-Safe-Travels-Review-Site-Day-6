"use client"

import { useState } from "react"
import { Star, Upload } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export function ReviewForm() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    listingName: "",
    city: "",
    scores: {
      neighborhood: 0,
      security: 0,
      staff: 0,
      accessibility: 0,
    },
    tags: [],
    reviewText: "",
    photos: [],
  })

  const safetyTags = [
    "Well-lit entrance",
    "24h front desk",
    "Security cameras",
    "Keycard access",
    "Safe neighborhood",
    "Female staff",
    "English-speaking staff",
    "Emergency contact",
    "Public transport nearby",
    "Walkable area",
    "Tourist police",
    "Local SIM available",
  ]

  const handleScoreChange = (category: string, score: number) => {
    setFormData((prev) => ({
      ...prev,
      scores: { ...prev.scores, [category]: score },
    }))
  }

  const handleTagToggle = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }))
  }

  const handleSubmit = () => {
    toast({
      title: "Review submitted!",
      description: "Thank you for helping fellow travelers stay safe.",
    })
    // Reset form or redirect
  }

  const ScoreSelector = ({ category, label }: { category: string; label: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((score) => (
          <button key={score} type="button" onClick={() => handleScoreChange(category, score)} className="p-1">
            <Star
              className={`h-6 w-6 ${
                score <= formData.scores[category as keyof typeof formData.scores]
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Step {step} of 3</CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="listingName">Accommodation Name</Label>
                <Input
                  id="listingName"
                  value={formData.listingName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, listingName: e.target.value }))}
                  placeholder="e.g., Hotel Lisboa Plaza"
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                  placeholder="e.g., Lisbon"
                />
              </div>
            </div>
            <Button onClick={() => setStep(2)} className="w-full">
              Next: Safety Scores
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Safety Scores</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ScoreSelector category="neighborhood" label="Neighborhood Safety" />
              <ScoreSelector category="security" label="Accommodation Security" />
              <ScoreSelector category="staff" label="Staff Friendliness" />
              <ScoreSelector category="accessibility" label="Accessibility" />
            </div>

            <div>
              <Label className="text-base font-medium mb-3 block">Safety Features (select all that apply)</Label>
              <div className="grid md:grid-cols-2 gap-3">
                {safetyTags.map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <Checkbox
                      id={tag}
                      checked={formData.tags.includes(tag)}
                      onCheckedChange={() => handleTagToggle(tag)}
                    />
                    <Label htmlFor={tag} className="text-sm">
                      {tag}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={() => setStep(3)} className="flex-1">
                Next: Write Review
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Your Experience</h3>
            <div>
              <Label htmlFor="reviewText">Tell us about your stay</Label>
              <Textarea
                id="reviewText"
                value={formData.reviewText}
                onChange={(e) => setFormData((prev) => ({ ...prev, reviewText: e.target.value }))}
                placeholder="Share details about your experience, what made you feel safe or unsafe, and any tips for other solo female travelers..."
                rows={6}
              />
            </div>

            <div>
              <Label>Add Photos (optional)</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">Click to upload photos</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={handleSubmit} className="flex-1">
                Submit Review
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
