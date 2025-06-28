import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, ArrowRight } from "lucide-react";

export default function BusinessPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Building className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-trust-navy mb-4">
            Business Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Manage your listing, respond to reviews, and join our Solo-Certified
            program for enhanced visibility.
          </p>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <Building className="h-16 w-16 text-primary/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trust-navy mb-2">
                Business Dashboard Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                Claim your listing and engage with our community of female
                travelers.
              </p>
              <Button className="w-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
