import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  Filter,
  Map,
  List,
  Star,
  MapPin,
  Wifi,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navigation from "@/components/Navigation";
import SafetyScoreBadge from "@/components/SafetyScoreBadge";

// Mock data for listings
const mockListings = [
  {
    id: 1,
    name: "Casa do Bacalhau Hotel",
    type: "hotel",
    city: "Lisbon",
    neighborhood: "Chiado",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    safetyScore: 4.8,
    priceRange: "€€€",
    reviewCount: 247,
    isCertified: true,
    amenities: ["24h desk", "CCTV", "Well-lit entrance", "Female staff"],
    shortDescription:
      "Boutique hotel in the heart of Lisbon with excellent safety measures and female-friendly staff.",
    lat: 38.7101,
    lng: -9.142,
  },
  {
    id: 2,
    name: "Safe Haven Hostel",
    type: "hostel",
    city: "Lisbon",
    neighborhood: "Bairro Alto",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
    safetyScore: 4.5,
    priceRange: "€",
    reviewCount: 156,
    isCertified: false,
    amenities: ["Female-only dorms", "Lockers", "24h access", "Safe area"],
    shortDescription:
      "Women-only hostel with secure facilities and a supportive community atmosphere.",
    lat: 38.7136,
    lng: -9.1447,
  },
  {
    id: 3,
    name: "Alfama Comfort Apartments",
    type: "apartment",
    city: "Lisbon",
    neighborhood: "Alfama",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    safetyScore: 4.2,
    priceRange: "€€",
    reviewCount: 89,
    isCertified: true,
    amenities: ["Secure building", "Keyless entry", "Neighborhood patrol"],
    shortDescription:
      "Modern apartments in historic Alfama with excellent security features.",
    lat: 38.7139,
    lng: -9.1333,
  },
  {
    id: 4,
    name: "Príncipe Real Guesthouse",
    type: "guesthouse",
    city: "Lisbon",
    neighborhood: "Príncipe Real",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    safetyScore: 4.6,
    priceRange: "€€",
    reviewCount: 203,
    isCertified: true,
    amenities: ["Female host", "Safe neighborhood", "Good lighting"],
    shortDescription:
      "Charming guesthouse run by a local woman in one of Lisbon's safest areas.",
    lat: 38.715,
    lng: -9.15,
  },
];

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("q") || "Lisbon",
  );
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [sortBy, setSortBy] = useState("safety");
  const [selectedFilters, setSelectedFilters] = useState({
    types: [] as string[],
    priceRanges: [] as string[],
    amenities: [] as string[],
    minSafetyScore: 0,
  });
  const [filteredListings, setFilteredListings] = useState(mockListings);

  useEffect(() => {
    // Apply filters to listings
    let filtered = mockListings.filter((listing) => {
      // Search query filter
      if (
        searchQuery &&
        !listing.city.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !listing.neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Type filter
      if (
        selectedFilters.types.length > 0 &&
        !selectedFilters.types.includes(listing.type)
      ) {
        return false;
      }

      // Price range filter
      if (
        selectedFilters.priceRanges.length > 0 &&
        !selectedFilters.priceRanges.includes(listing.priceRange)
      ) {
        return false;
      }

      // Safety score filter
      if (listing.safetyScore < selectedFilters.minSafetyScore) {
        return false;
      }

      // Amenities filter
      if (selectedFilters.amenities.length > 0) {
        const hasRequiredAmenities = selectedFilters.amenities.every(
          (amenity) =>
            listing.amenities.some((listingAmenity) =>
              listingAmenity.toLowerCase().includes(amenity.toLowerCase()),
            ),
        );
        if (!hasRequiredAmenities) {
          return false;
        }
      }

      return true;
    });

    // Sort listings
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "safety":
          return b.safetyScore - a.safetyScore;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        case "price-low":
          return a.priceRange.length - b.priceRange.length;
        case "price-high":
          return b.priceRange.length - a.priceRange.length;
        default:
          return 0;
      }
    });

    setFilteredListings(filtered);
  }, [searchQuery, selectedFilters, sortBy]);

  const handleFilterChange = (
    category: keyof typeof selectedFilters,
    value: string | number,
    checked?: boolean,
  ) => {
    setSelectedFilters((prev) => {
      if (category === "minSafetyScore") {
        return { ...prev, [category]: value as number };
      }

      const currentArray = prev[category] as string[];
      if (checked) {
        return { ...prev, [category]: [...currentArray, value as string] };
      } else {
        return {
          ...prev,
          [category]: currentArray.filter((item) => item !== value),
        };
      }
    });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Accommodation Type</h3>
        <div className="space-y-2">
          {["hotel", "hostel", "apartment", "guesthouse"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={selectedFilters.types.includes(type)}
                onCheckedChange={(checked) =>
                  handleFilterChange("types", type, checked as boolean)
                }
              />
              <label htmlFor={type} className="text-sm capitalize">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          {["€", "€€", "€€€", "€€€€"].map((price) => (
            <div key={price} className="flex items-center space-x-2">
              <Checkbox
                id={price}
                checked={selectedFilters.priceRanges.includes(price)}
                onCheckedChange={(checked) =>
                  handleFilterChange("priceRanges", price, checked as boolean)
                }
              />
              <label htmlFor={price} className="text-sm">
                {price}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Safety Features</h3>
        <div className="space-y-2">
          {[
            "24h desk",
            "CCTV",
            "Female staff",
            "Well-lit",
            "Secure building",
          ].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={selectedFilters.amenities.includes(amenity)}
                onCheckedChange={(checked) =>
                  handleFilterChange("amenities", amenity, checked as boolean)
                }
              />
              <label htmlFor={amenity} className="text-sm">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Minimum Safety Score</h3>
        <Select
          value={selectedFilters.minSafetyScore.toString()}
          onValueChange={(value) =>
            handleFilterChange("minSafetyScore", parseFloat(value))
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any score</SelectItem>
            <SelectItem value="3">3.0+ (Safe)</SelectItem>
            <SelectItem value="4">4.0+ (Very Safe)</SelectItem>
            <SelectItem value="4.5">4.5+ (Excellent)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search destinations, hotels, or neighborhoods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg border-gray-200 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="safety">Safety Score</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center border border-gray-200 rounded-lg">
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-r-none"
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className="rounded-l-none"
                >
                  <Map className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="mb-6">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search results
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-trust-navy">
                Accommodations in {searchQuery || "Lisbon"}
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredListings.length} results found
              </p>
            </div>

            {viewMode === "list" ? (
              <div className="space-y-6">
                {filteredListings.map((listing) => (
                  <Card
                    key={listing.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="relative lg:w-80 h-48 lg:h-auto">
                        <img
                          src={listing.image}
                          alt={listing.name}
                          className="w-full h-full object-cover"
                        />
                        {listing.isCertified && (
                          <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
                            Solo-Certified
                          </div>
                        )}
                        <div className="absolute bottom-3 right-3">
                          <SafetyScoreBadge score={listing.safetyScore} />
                        </div>
                      </div>

                      <CardContent className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-trust-navy mb-1">
                              {listing.name}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <MapPin className="h-4 w-4" />
                              <span>
                                {listing.neighborhood}, {listing.city}
                              </span>
                              <span>•</span>
                              <span className="capitalize">{listing.type}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-trust-navy">
                              {listing.priceRange}
                            </div>
                            <div className="text-sm text-gray-500">
                              per night
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4">
                          {listing.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {listing.amenities
                            .slice(0, 4)
                            .map((amenity, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                              >
                                {amenity.includes("24h") && (
                                  <Clock className="h-3 w-3" />
                                )}
                                {amenity.includes("CCTV") && (
                                  <Shield className="h-3 w-3" />
                                )}
                                {amenity.includes("Wifi") && (
                                  <Wifi className="h-3 w-3" />
                                )}
                                {amenity}
                              </span>
                            ))}
                          {listing.amenities.length > 4 && (
                            <span className="text-xs text-gray-500">
                              +{listing.amenities.length - 4} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex text-primary">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(listing.safetyScore)
                                      ? "fill-current"
                                      : "opacity-30"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {listing.reviewCount} reviews
                            </span>
                          </div>

                          <Button className="ml-4">View Details</Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="h-96">
                <CardContent className="p-6 h-full">
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <Map className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Interactive map coming soon...</p>
                      <p className="text-sm mt-2">
                        View color-coded safety zones and pinpoint locations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
