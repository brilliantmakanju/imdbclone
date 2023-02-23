export default function MoviePage(params) {
	const movieId = params.id
	const res = await fetch(`http://127.0.0.1:8000/Movie/${movieId}`)
	return (
		<>
			MoviePage
		</>
	)
}
