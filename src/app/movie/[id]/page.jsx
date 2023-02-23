import Image from "next/image"

async function getMovie(movieId){
	//const movieId = params.id
	const res = await fetch(`http://127.0.0.1:8000/Movie/${movieId}`)
	
	return await res.json()
}

export default async function MoviePage({ params }) {
	const movieId = params.id
	const movie = await getMovie(movieId)
	return (
		<div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5" >
		<video className="rounded-md w-full p-[20px] " src={`http://127.0.0.1:8000${movie.video_file}`}  controls>
				
			</video>
			<div className="p-[20px]" >
				<h2 className="text-[30px] text-amber-500 font-extrabold " >{ movie.title }</h2>
				<p>{ movie.full_desc } </p>
			</div>
		</div>
	)
}

			//mage src={`http://127.0.0.1:8000${movie.poster_pic}`} height={100} width={200} className="rounded-md w-full p-[20px] " placeholder="blur" blurDataURL={`http://127.0.0.1:8000${movie.poster_pic}`} style={{ maxWidth: "100%", height:"450px"}} />
