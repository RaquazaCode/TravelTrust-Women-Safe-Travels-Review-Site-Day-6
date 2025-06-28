import { UserCheck, Search, MessageSquare, Shield } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserCheck,
      title: "Get Verified",
      description: "Quick verification process ensures our community stays safe and trusted.",
    },
    {
      icon: Search,
      title: "Search & Discover",
      description: "Find accommodations, restaurants, and attractions with detailed safety insights.",
    },
    {
      icon: MessageSquare,
      title: "Read Real Reviews",
      description: "Access honest reviews from verified solo female travelers like you.",
    },
    {
      icon: Shield,
      title: "Travel Confidently",
      description: "Make informed decisions and travel with peace of mind.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How TravelTrust Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of solo female travelers who trust our platform for safe travel experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
