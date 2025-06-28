import { Header } from "@/components/layout/header"
import { ReviewForm } from "@/components/review/review-form"

export default function SubmitReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Share Your Experience</h1>
            <p className="text-gray-600">Help fellow solo female travelers by sharing your honest review</p>
          </div>
          <ReviewForm />
        </div>
      </main>
    </div>
  )
}
