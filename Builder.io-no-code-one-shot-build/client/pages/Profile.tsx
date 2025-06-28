import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, ArrowRight } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <User className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-trust-navy mb-4">
            User Profile
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Manage your profile, view your review history, and track your travel
            experiences.
          </p>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <User className="h-16 w-16 text-primary/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trust-navy mb-2">
                Profile Dashboard Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                Track your reviews, saved trips, and community contributions.
              </p>
              <Button className="w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
