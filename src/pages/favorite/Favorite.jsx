import FavoriteCard from '../../components/favoriteCard/FavoriteCard'

const Favorite = () => {
	return (
		<div className='flex flex-col gap-5 p-5'>
			<FavoriteCard />
			<FavoriteCard />
			<FavoriteCard />
			<FavoriteCard />
			<FavoriteCard />
		</div>
	)
}

export default Favorite
