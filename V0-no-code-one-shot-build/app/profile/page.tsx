import { Header } from "@/components/layout/header"
import { UserProfile } from "@/components/profile/user-profile"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <UserProfile />
      </main>
    </div>
  )
}
