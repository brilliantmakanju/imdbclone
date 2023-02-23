"use client"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { MdLightMode } from "react-icons/md"
import { BsFillMoonFill } from "react-icons/bs"

const DarkModeSwitch = () => {

	const [ mounted, setMounted ] = useState(false)
	
	const { systemTheme, theme, setTheme } = useTheme()	
	
	const currentTheme = theme === "system" ? systemTheme : theme

	useEffect(() => setMounted(true) , [])

	return (
		<>
		{
			mounted && (currentTheme === "dark" ? (
				<MdLightMode onClick={() => setTheme("light")} className="hover:text-amber-400 duration-300 ease-in-out" />	
			) :(
				<BsFillMoonFill onClick={() => setTheme("dark")} className="hover:text-amber-400 duration-300 ease-in-out"  />
			))
		}
		</>
	)
}



export default DarkModeSwitch
