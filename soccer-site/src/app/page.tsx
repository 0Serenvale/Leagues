import { Suspense } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StandingsTable from '@/components/StandingsTable'
import NewsFeed from '@/components/NewsFeed'
import MatchList from '@/components/MatchList'
import VideoEmbed from '@/components/VideoEmbed'
import { getPayloadClient } from '@/utils/payload'

export default async function HomePage() {
  // If we are building, don't fetch payload to prevent mongodb connection error.
  if (process.env.NEXT_PHASE === 'phase-production-build') {
     return <div>Building...</div>
  }

  let settings = { featuredVideoUrl: 'https://www.youtube.com/watch?v=JHPKwMz3HIw' }
  try {
     const payload = await getPayloadClient()
     const loadedSettings = await payload.findGlobal({ slug: 'settings' })
     if (loadedSettings.featuredVideoUrl) {
        settings = loadedSettings
     }
  } catch (e) {
     console.error("Payload db error during render", e)
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center w-full pb-12" dir="ltr">
      <Suspense fallback={<div className="h-16 w-full bg-[#187A40] animate-pulse"></div>}>
         <Header />
      </Suspense>

      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6 mt-4 px-4" dir="rtl">

        {/* Main Content Column */}
        <div className="flex-1 flex flex-col gap-6">
          <section className="bg-white border border-gray-300 shadow-sm overflow-hidden">
            <div className="bg-yellow-400 text-black font-bold text-lg px-4 py-2 border-b-4 border-green-600">
               À la Une
            </div>
            <Suspense fallback={<div className="h-64 bg-gray-200 animate-pulse m-4"></div>}>
               <HeroSection />
            </Suspense>
          </section>

          <section>
            <Suspense fallback={<div className="h-48 bg-gray-200 animate-pulse"></div>}>
               <NewsFeed />
            </Suspense>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="w-full lg:w-[350px] flex flex-col gap-6">
          <section className="bg-white border border-gray-300 shadow-sm p-4">
            <h3 className="text-gray-800 font-bold mb-4 uppercase text-sm border-b pb-2">Classements - CHAMPIONNAT LIGUE UNE</h3>
            <Suspense fallback={<div className="h-64 bg-gray-200 animate-pulse"></div>}>
               <StandingsTable />
            </Suspense>
          </section>

          <section className="bg-white border border-gray-300 shadow-sm p-4">
             <h3 className="text-gray-800 font-bold mb-4 uppercase text-sm border-b pb-2">Résultats - DERNIÈRE JOURNÉE</h3>
             <Suspense fallback={<div className="h-64 bg-gray-200 animate-pulse"></div>}>
                <MatchList />
             </Suspense>
          </section>

          {settings.featuredVideoUrl && (
             <section className="bg-white border border-gray-300 shadow-sm p-4">
                <Suspense fallback={<div className="h-48 bg-gray-200 animate-pulse"></div>}>
                   <VideoEmbed url={settings.featuredVideoUrl} />
                </Suspense>
             </section>
          )}
        </div>
      </div>
    </main>
  )
}
