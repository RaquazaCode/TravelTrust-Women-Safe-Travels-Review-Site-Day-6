import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Shield,
  Users,
  Star,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import SafetyScoreBadge from "@/components/SafetyScoreBadge";

const featuredDestinations = [
  {
    id: 1,
    name: "Lisbon, Portugal",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop",
    safetyScore: 4.5,
    reviewCount: 1247,
  },
  {
    id: 2,
    name: "Copenhagen, Denmark",
    image:
      "https://images.unsplash.com/photo-1513622470522-26e89109f9bb?w=800&h=600&fit=crop",
    safetyScore: 4.8,
    reviewCount: 892,
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    safetyScore: 4.6,
    reviewCount: 2156,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "London, UK",
    text: "TravelTrust gave me the confidence to explore solo. The detailed safety reviews are incredibly helpful!",
    verified: true,
  },
  {
    name: "Emma K.",
    location: "Sydney, AU",
    text: "Found the perfect safe accommodation in Barcelona thanks to this platform. The community is amazing!",
    verified: true,
  },
  {
    name: "Chloe R.",
    location: "Toronto, CA",
    text: "The safety scores and detailed reviews helped me plan my entire Europe trip. Felt safe everywhere!",
    verified: true,
  },
];

const stats = [
  { label: "Verified Female Travelers", value: "50K+" },
  { label: "Safety Reviews", value: "125K+" },
  { label: "Destinations Covered", value: "500+" },
  { label: "Countries", value: "85+" },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/destinations?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-trust-navy leading-tight">
                Travel solo, <span className="text-primary">not scared</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Join 50,000+ verified female travelers sharing real safety
                experiences. Find trusted accommodations, safe neighborhoods,
                and connect with our community.
              </p>

              {/* Search Bar */}
              <form
                onSubmit={handleSearch}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Where do you want to go?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 px-8">
                  Search
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Verified Reviews Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Women-Only Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>125K+ Safety Reviews</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
                  alt="Solo female traveler"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Review Card */}
              <Card className="absolute -bottom-6 -left-6 w-64 shadow-xl border-0 bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-primary fill-current" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        "Felt completely safe walking alone at night"
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <SafetyScoreBadge
                          score={4.8}
                          size="sm"
                          showText={false}
                        />
                        <span className="text-xs text-gray-500">
                          • Sarah M.
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-trust-navy">
              How TravelTrust Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Your safety companion for solo travel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-trust-navy mb-4">
                Search & Discover
              </h3>
              <p className="text-gray-600">
                Find destinations, accommodations, and experiences with detailed
                safety ratings from verified female travelers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-trust-navy mb-4">
                Read Real Reviews
              </h3>
              <p className="text-gray-600">
                Access authentic safety reviews covering neighborhood security,
                accommodation safety, and transportation options.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-trust-navy mb-4">
                Connect & Share
              </h3>
              <p className="text-gray-600">
                Join our community forum to ask questions, share experiences,
                and help other women travel safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-trust-navy">
                Top Safe Destinations
              </h2>
              <p className="mt-2 text-gray-600">
                Most recommended by our community
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/destinations">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <SafetyScoreBadge
                      score={destination.safetyScore}
                      size="sm"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-trust-navy">
                        {destination.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{destination.reviewCount} reviews</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-trust-navy">
              What Travelers Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Real experiences from verified female travelers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 text-xs text-primary">
                        <Check className="h-3 w-3" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                  <div className="text-sm">
                    <div className="font-semibold text-trust-navy">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Travel with Confidence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of women who trust our community for safe solo travel
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-3"
              asChild
            >
              <Link to="/auth">Join TravelTrust</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-trust-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">
                  Travel<span className="text-primary">Trust</span>
                </span>
              </div>
              <p className="text-gray-300">
                Empowering women to travel solo safely with verified reviews and
                community support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/destinations" className="hover:text-white">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="/business" className="hover:text-white">
                    Business Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Safety Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 TravelTrust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
