import { getPayloadClient } from '@/utils/payload'
import Image from 'next/image'

export default async function HeroSection() {
  let match = null
  try {
     const payload = await getPayloadClient()
     const matchesRes = await payload.find({
       collection: 'matches',
       limit: 1,
       sort: '-match_date',
     })
     match = matchesRes.docs[0]
  } catch(e) {}

  if (!match) {
    return (
      <div className="p-8 text-center text-gray-500 bg-gray-50 h-64 flex flex-col justify-center border-l-4 border-green-600">
        <p className="font-semibold text-lg">Aucun match à la une trouvé.</p>
      </div>
    )
  }

  const pTeam1 = match.projectteam1 as any
  const pTeam2 = match.projectteam2 as any
  const team1 = pTeam1?.team
  const team2 = pTeam2?.team

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 border-l-4 border-green-600 mb-6 group">
      <div className="flex flex-col md:flex-row p-6 gap-6 items-center">

         <div className="w-full md:w-1/3 flex flex-col items-center bg-[#187A40] text-white rounded p-4 shadow-sm">
             <div className="text-xs font-bold uppercase mb-2 border-b border-white/30 pb-1 w-full text-center">
                 LIGUE HONNEUR
             </div>
             <div className="flex justify-between items-center w-full my-4">
                 <div className="flex flex-col items-center">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#187A40] font-bold text-sm shadow">
                        {team1?.name?.substring(0,3).toUpperCase() || 'T1'}
                     </div>
                 </div>
                 <div className="text-2xl font-black bg-white/20 px-3 py-1 rounded">VS</div>
                 <div className="flex flex-col items-center">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#187A40] font-bold text-sm shadow">
                        {team2?.name?.substring(0,3).toUpperCase() || 'T2'}
                     </div>
                 </div>
             </div>
             <div className="mt-2 text-center text-sm">
                 {new Date(match.match_date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
             </div>
         </div>

         <div className="w-full md:w-2/3 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">PROCHAIN MATCH CHOC</h2>
            <p className="text-gray-600 text-sm leading-relaxed border-l-2 border-gray-300 pl-4">
               Suivez l'événement majeur du championnat. La rencontre tant attendue entre <strong>{team1?.name}</strong> et <strong>{team2?.name}</strong> s'annonce explosive. Ne manquez pas cette affiche de la journée qui pourrait bouleverser le classement de la ligue de football de wilaya.
            </p>
            <div className="mt-4 flex justify-end">
               <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-1 px-4 rounded border border-gray-400 transition-colors">
                  Lire Plus »
               </button>
            </div>
         </div>

      </div>
    </div>
  )
}
