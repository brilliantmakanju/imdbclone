"use client"
import { useEffect } from "react"
export default function Error({ error , reset }){
	useEffect(() => {
		console.log(error)
	}, [error])
	return(
		<div className="text-center text-amber-700 my-auto " >
			<h1 className=" mt-[30%] md:mt-[10em] lg:mt-[6em] lg:text-[30px] " >Something went wrong</h1>
			<button onClick={() => reset() } className="bg-amber-600 text-white p-2 rounded-[5px] mt-[5px] " > Try AGain </button>
		</div>
	)
}
