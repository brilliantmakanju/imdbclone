"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const NavbarItem = ({ title, param }) => {

	const searchParams = useSearchParams()
	const genre = searchParams.get("genre")

	return (
		<div className={` text-white hover:text-amber-100 duration-300 ease-in-out cursor-pointer ${genre && genre === param ? " underline underline-offset-8 decoration-4 decoration-white" : " "} `} >
			<Link href={`/?genre=${param}`} >
				{  title }
			</Link>
		</div>
	)
}

export default NavbarItem
