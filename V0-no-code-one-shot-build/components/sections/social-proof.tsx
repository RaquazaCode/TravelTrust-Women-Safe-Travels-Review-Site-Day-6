export function SocialProof() {
  const stats = [
    { number: "50K+", label: "Verified Travelers" },
    { number: "125K+", label: "Safety Reviews" },
    { number: "2,500+", label: "Destinations" },
    { number: "98%", label: "Feel Safer" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
