import { getPayloadClient } from '@/utils/payload'
import Image from 'next/image'

export default async function NewsFeed() {
  let newsRes = { docs: [] as any[] }
  try {
     const payload = await getPayloadClient()
     newsRes = await payload.find({
       collection: 'news',
       limit: 5,
       sort: '-publishedDate',
     })
  } catch(e) {}

  return (
    <div className="flex flex-col gap-4">
      {newsRes.docs.map((article: any) => (
        <article key={article.id} className="bg-white border-l-4 border-green-600 shadow-sm p-4 flex flex-col md:flex-row gap-4 hover:shadow-md transition-shadow group">

          <div className="w-full md:w-32 h-24 flex-shrink-0 bg-gray-200 rounded overflow-hidden relative border border-gray-300">
             {article.image && typeof article.image === 'object' && article.image.url ? (
                <Image
                  src={article.image.url}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
             ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs">
                   <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                </div>
             )}
          </div>

          <div className="flex flex-col flex-1 justify-between">
            <div>
               <div className="text-xs font-bold text-[#187A40] uppercase mb-1 tracking-wider">
                  {article.category?.replace('_', ' ') || 'Actualité'}
               </div>
               <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-green-700 transition-colors">
                 {article.title}
               </h3>
               <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                 Découvrez les dernières actualités concernant ce sujet passionnant de la ligue de football...
               </p>
            </div>

            <div className="flex justify-between items-center mt-4 border-t border-gray-100 pt-2">
               <span className="text-xs text-gray-400 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                  {new Date(article.publishedDate).toLocaleDateString()}
               </span>
               <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-1 px-3 rounded border border-gray-300">
                  Lire Plus »
               </button>
            </div>
          </div>
        </article>
      ))}

      {newsRes.docs.length === 0 && (
         <div className="p-8 text-center text-gray-500 bg-white border border-gray-200">
           Aucune actualité récente.
         </div>
      )}
    </div>
  )
}
