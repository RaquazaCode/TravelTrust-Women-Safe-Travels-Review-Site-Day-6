import { Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SafetyScoreBadgeProps {
  score: number
  size?: "sm" | "md" | "lg"
}

export function SafetyScoreBadge({ score, size = "md" }: SafetyScoreBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 4.5) return "safety-excellent"
    if (score >= 3.5) return "safety-good"
    if (score >= 2.5) return "safety-fair"
    return "safety-poor"
  }

  const getScoreText = (score: number) => {
    if (score >= 4.5) return "Excellent"
    if (score >= 3.5) return "Good"
    if (score >= 2.5) return "Fair"
    return "Poor"
  }

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <Badge className={`${getScoreColor(score)} ${sizeClasses[size]} border`}>
      <Shield className="h-3 w-3 mr-1" />
      {getScoreText(score)} ({score.toFixed(1)})
    </Badge>
  )
}
