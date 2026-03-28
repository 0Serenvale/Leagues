import { getPayloadClient } from '@/utils/payload'

export default async function StandingsTable() {

  let standingsReq = { docs: [] as any[] }
  try {
     const payload = await getPayloadClient()
     standingsReq = await payload.find({
       collection: 'standings',
       sort: '-points',
       limit: 20,
     })
  } catch(e) {}

  return (
    <div className="overflow-x-auto w-full border border-gray-200 shadow-sm bg-white rounded-md text-sm">
      <table className="min-w-full text-left">
        <thead>
          <tr className="bg-[#187A40] text-white text-xs uppercase tracking-wider text-center">
            <th className="py-2 px-3 border-r border-[#219a53] w-12 font-semibold">Pos</th>
            <th className="py-2 px-3 border-r border-[#219a53] text-left font-semibold">Club</th>
            <th className="py-2 px-3 border-r border-[#219a53] w-12 font-semibold">Pts</th>
            <th className="py-2 px-3 border-r border-[#219a53] w-12 font-semibold">J</th>
            <th className="py-2 px-3 border-r border-[#219a53] w-12 font-semibold">G</th>
            <th className="py-2 px-3 border-r border-[#219a53] w-12 font-semibold">N</th>
            <th className="py-2 px-3 w-12 font-semibold">P</th>
          </tr>
        </thead>
        <tbody>
          {standingsReq.docs.map((row: any, index: number) => {
            const pteam = row.projectteam as any
            const team = pteam?.team
            const isTop = index < 3;
            const isBottom = index > standingsReq.docs.length - 4;

            return (
              <tr
                key={row.id}
                className={`text-center border-b border-gray-200 transition-colors hover:bg-gray-50
                  ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}
                  ${isTop ? 'bg-green-50' : ''}
                  ${isBottom ? 'bg-red-50' : ''}
                `}
              >
                <td className="py-2 px-3 font-semibold text-gray-700">{index + 1}</td>
                <td className="py-2 px-3 text-left font-bold text-gray-800 border-l border-gray-200 flex items-center gap-2">
                   <div className="w-5 h-5 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-black">
                      {team?.name?.substring(0,2).toUpperCase()}
                   </div>
                   <span className="truncate">{team?.name || 'Inconnu'}</span>
                </td>
                <td className="py-2 px-3 font-bold text-gray-900 bg-gray-100">{row.points}</td>
                <td className="py-2 px-3 text-gray-600">{row.played}</td>
                <td className="py-2 px-3 text-green-700">{row.won}</td>
                <td className="py-2 px-3 text-yellow-600">{row.drawn}</td>
                <td className="py-2 px-3 text-red-600 border-r border-gray-200">{row.lost}</td>
              </tr>
            )
          })}
          {standingsReq.docs.length === 0 && (
             <tr>
               <td colSpan={7} className="py-8 text-center text-gray-500 italic">Aucun classement disponible.</td>
             </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
