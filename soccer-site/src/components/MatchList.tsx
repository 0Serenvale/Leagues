import { getPayloadClient } from '@/utils/payload'

export default async function MatchList() {
  let matchesRes = { docs: [] as any[] }
  try {
     const payload = await getPayloadClient()
     matchesRes = await payload.find({
       collection: 'matches',
       limit: 6,
       sort: '-match_date',
     })
  } catch(e) {}

  return (
    <div className="flex flex-col gap-2">
      {matchesRes.docs.map((match: any, index: number) => {
        const pTeam1 = match.projectteam1 as any
        const pTeam2 = match.projectteam2 as any
        const team1 = pTeam1?.team
        const team2 = pTeam2?.team

        return (
          <div key={match.id} className="flex justify-between items-center py-2 px-3 border-b border-gray-100 bg-gray-50 hover:bg-white transition-colors text-sm rounded">

            <div className="w-1/3 flex justify-end gap-2 items-center font-semibold text-gray-800">
               <span className="truncate" title={team1?.name}>{team1?.name?.substring(0,10)}</span>
               <div className="w-5 h-5 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-black border">
                  {team1?.name?.substring(0,2).toUpperCase()}
               </div>
            </div>

            <div className={`w-1/3 flex justify-center items-center gap-1 font-bold rounded px-2 py-1 bg-gray-200 text-gray-800`}>
              <span className="text-base">{match.team1_result ?? '-'}</span>
              <span className="text-xs text-gray-500 mx-1">:</span>
              <span className="text-base">{match.team2_result ?? '-'}</span>
            </div>

            <div className="w-1/3 flex justify-start gap-2 items-center font-semibold text-gray-800">
               <div className="w-5 h-5 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-black border">
                  {team2?.name?.substring(0,2).toUpperCase()}
               </div>
               <span className="truncate" title={team2?.name}>{team2?.name?.substring(0,10)}</span>
            </div>

          </div>
        )
      })}

      {matchesRes.docs.length === 0 && (
         <div className="py-4 text-center text-gray-500 italic text-sm">Aucun résultat disponible.</div>
      )}
    </div>
  )
}
