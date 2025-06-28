import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export default function Auth() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-trust-navy mb-2">
            Join TravelTrust
          </h1>
          <p className="text-gray-600">
            Sign up to access verified reviews and connect with our community
          </p>
        </div>

        <Card>
          <CardContent className="p-8 text-center">
            <Shield className="h-16 w-16 text-primary/50 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-trust-navy mb-2">
              Authentication Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're implementing secure verification to ensure our community
              remains safe and trusted.
            </p>
            <Button className="w-full">
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
