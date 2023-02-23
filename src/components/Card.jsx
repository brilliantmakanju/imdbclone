import "./Card"
import Link from "next/link"
import Image from "next/image"
export default function Card({ result }){
	return (
	<Link href={`movie/${result.pk}`} >
	<div className="bg-[gray] w-[70%] shadow-md shadow-[white] hover:shadow-amber-600 duration-300 ease-in-out rounded-md cursor-pointer " >
	<div className="relative h-[300px] w-full " >
	
		<Image src={`http://127.0.0.1:8000${result.poster_pic}`} fill className="rounded-t-md absolute " placeholder="blur" blurDataURL={`http://127.0.0.1:8000${result.poster_pic}`} alt={result.title}/>
	</div>
			<div className="mt-[10px] font-extrabold p-2 " >
			<h3 className="text-amber-400" >{result.title}</h3>
			<div className="flex justify-between items-center " >
			
			<span>
				{result.categories}
			</span>
			200 Views
			</div>
		</div>
		
	</div>
	</Link>
	)
}

			//<p>{result.short_desc}</p>
