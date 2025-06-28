import { Header } from "@/components/layout/header"
import { CommunityHub } from "@/components/community/community-hub"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <CommunityHub />
      </main>
    </div>
  )
}
