export default function MoviePage(params) {
	const movieId = params.id
	const res = await fetch(`https://pyapimovie.pythonanywhere.com/Movie/${movieId}`)
	return (
		<>
			MoviePage
		</>
	)
}
