import { getPayloadClient } from '@/utils/payload'

export default async function Header() {
  let clubsReq = { docs: [] as any[] }
  try {
     const payload = await getPayloadClient()
     clubsReq = await payload.find({
        collection: 'clubs',
        limit: 20,
     })
  } catch(e) {}

  return (
    <header className="w-full bg-[#187A40] text-white">
      <div className="max-w-[1200px] mx-auto py-2 px-4 text-xs font-semibold flex justify-between items-center border-b border-[#219a53]">
        <div className="flex gap-4">
           <span>LIGUE DE FOOTBALL DE WILAYA</span>
           <span>RÉSULTATS DERNIÈRE JOURNÉE 2024 - 2025</span>
        </div>
      </div>
      {/* Simulation of the hero image in the background with logos */}
      <div className="w-full h-[250px] bg-[url('https://placehold.co/1920x400/1e293b/000000?text=Stadium+Background')] bg-cover bg-center flex flex-col justify-end">
         <div className="bg-white py-2 w-full border-t-4 border-[#187A40] flex justify-center items-center gap-4 overflow-x-auto px-4">
            {clubsReq.docs.map((club: any) => (
              <div key={club.id} className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border flex items-center justify-center text-xs text-black">
                 {club.logo && typeof club.logo === 'object' && club.logo.url ? (
                    <img src={club.logo.url} alt={club.name} className="object-cover w-full h-full" />
                 ) : (
                    club.name.substring(0,2).toUpperCase()
                 )}
              </div>
            ))}
            {clubsReq.docs.length === 0 && (
                <div className="text-gray-500 text-sm">Logos des clubs</div>
            )}
         </div>
         <div className="bg-[#187A40] text-white text-center text-sm py-1 font-bold">
            ACCUEIL - CHAMPIONNAT - COMPETITION
         </div>
      </div>
    </header>
  )
}
