import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Shield, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="h-12 w-12 text-primary" />
          </div>

          <h1 className="text-6xl font-bold text-trust-navy mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-trust-navy mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist. You might have followed a
            broken link or entered an incorrect URL.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/destinations">
                <Search className="h-4 w-4 mr-2" />
                Search Destinations
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
