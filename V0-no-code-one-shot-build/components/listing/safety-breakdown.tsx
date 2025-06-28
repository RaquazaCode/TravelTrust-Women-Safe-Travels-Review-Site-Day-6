import { Shield, Home, MapPin, Users, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SafetyBreakdownProps {
  listing: any
}

export function SafetyBreakdown({ listing }: SafetyBreakdownProps) {
  const safetyCategories = [
    {
      icon: MapPin,
      name: "Neighborhood Safety",
      score: 4.6,
      description: "Well-lit streets, low crime rate",
    },
    {
      icon: Home,
      name: "Accommodation Security",
      score: 4.8,
      description: "24/7 front desk, keycard access",
    },
    {
      icon: Users,
      name: "Staff Friendliness",
      score: 4.7,
      description: "Helpful, English-speaking staff",
    },
    {
      icon: Clock,
      name: "Accessibility",
      score: 4.5,
      description: "Easy transport, nearby amenities",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="h-5 w-5 mr-2" />
          Safety Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {safetyCategories.map((category, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <category.icon className="h-4 w-4 mr-2 text-gray-600" />
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="font-bold">{category.score}/5</span>
            </div>
            <Progress value={(category.score / 5) * 100} className="h-2" />
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
