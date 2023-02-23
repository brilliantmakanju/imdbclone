import NavbarItem from './NavbarItem'

const Navbar = () => {
	return (
		<div className='flex py-[5px] px-[20px] justify-center items-center space-x-5 bg-amber-600 py-[15px]  ' >
        			<NavbarItem title="Trending"  param="fetchTrending" />
        			<NavbarItem title="Top Rated" param="fetchTopRated"  />
    		</div>
	)
}

export default Navbar
