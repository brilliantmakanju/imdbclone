import Head from "next/head"
//const API_KEY = process.env.API_KEY
import Results from "../components/Results"

export default async function Home({ searchParams }) {
	//const genre = searchParams.genre ||  "fetchTrending "
	const res = await fetch("https://pyapimovie.pythonanywhere.com/movies", {next : { revalidate: 100000 }})
	if(!res.ok){
		throw new Error("Failed to Fetch Data")
	}
	const data = await res.json()
  	return (
    		<>
		<Head>
				<title>Imdb-Clone | Home </title>
        			<meta content="width=device-width, initial-scale=1" name="viewport" />
        			<link rel="icon" href="/favicon.ico" />
			</Head>
    		{ data.length ===  0 
    		?
    			<h3>Result Not Found</h3>
    		:
    			<Results results={data} />
    			}
    		</>
  );
}
