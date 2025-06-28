import { cn } from "@/lib/utils";

interface SafetyScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function SafetyScoreBadge({
  score,
  size = "md",
  showText = true,
  className,
}: SafetyScoreBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 4.0) return "bg-safety-high text-white";
    if (score >= 3.0) return "bg-safety-medium text-gray-900";
    return "bg-safety-low text-white";
  };

  const getScoreText = (score: number) => {
    if (score >= 4.0) return "Very Safe";
    if (score >= 3.0) return "Safe";
    return "Use Caution";
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-semibold",
        getScoreColor(score),
        sizeClasses[size],
        className,
      )}
    >
      <span className="mr-1">{score.toFixed(1)}</span>
      {showText && (
        <span className="hidden sm:inline">• {getScoreText(score)}</span>
      )}
    </div>
  );
}
