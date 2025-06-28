"use client"

import Link from "next/link"
import { Search, PenTool, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/use-auth"
import { UserDropdown } from "@/components/ui/user-dropdown"
import { AuthModal } from "@/components/auth/auth-modal"
import { useState } from "react"

export function Header() {
  const { user, isAuthenticated } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TT</span>
            </div>
            <span className="font-bold text-xl">TravelTrust</span>
          </Link>

          <div className="hidden md:flex relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search destinations..." className="pl-10" />
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/community">Community</Link>
          </Button>

          {isAuthenticated ? (
            <>
              <Button variant="default" asChild>
                <Link href="/submit-review">
                  <PenTool className="h-4 w-4 mr-2" />
                  Submit Review
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <UserDropdown user={user} />
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => setShowAuthModal(true)}>
                Sign In
              </Button>
              <Button onClick={() => setShowAuthModal(true)}>Get Started</Button>
            </>
          )}
        </nav>
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </header>
  )
}
