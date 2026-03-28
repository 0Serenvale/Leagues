export default function VideoEmbed({ url }: { url: string }) {
  // Simple extraction of youtube ID
  let videoId = ''

  try {
    const urlObj = new URL(url)
    if (urlObj.hostname.includes('youtube.com')) {
      videoId = urlObj.searchParams.get('v') || ''
    } else if (urlObj.hostname.includes('youtu.be')) {
      videoId = urlObj.pathname.slice(1)
    }
  } catch (e) {
    console.error("Invalid Video URL", e)
  }

  if (!videoId) {
    return (
      <div className="w-full aspect-video bg-gray-200 flex items-center justify-center text-gray-500 rounded border border-gray-300">
         Vidéo indisponible
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
       <h3 className="font-bold text-gray-800 uppercase text-sm border-b pb-2 mb-2 flex items-center gap-2">
           <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
           WEB TV OFFICIELLE
       </h3>
       <div className="w-full aspect-video rounded overflow-hidden shadow-sm border border-gray-300 relative group">
         <iframe
           src={`https://www.youtube.com/embed/${videoId}?rel=0`}
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
           className="w-full h-full absolute top-0 left-0"
         />
       </div>
       <div className="text-xs text-gray-600 mt-2 text-center bg-gray-50 py-1 rounded border border-gray-200">
           Abonnez-vous à notre chaîne pour plus de résumés.
       </div>
    </div>
  )
}
