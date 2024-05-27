import { message } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteCard from '../../components/favoriteCard/FavoriteCard'
const Favorite = () => {
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
		const favoritesString = localStorage.getItem('favorites')
		if (favoritesString) {
			const parsedFavorites = JSON.parse(favoritesString)
			setFavorites(parsedFavorites)
		}
	}, [])

	const removeFavorite = productId => {
		const updatedFavorites = favorites.filter(item => item._id !== productId)
		setFavorites(updatedFavorites)
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
		message.warning('Товар удален из избранного.')
	}

	return (
		<div className='flex flex-col gap-5 p-5'>
			{favorites.length > 0 ? (
				favorites.map(item => (
					<FavoriteCard
						key={item._id}
						product={item}
						removeFavorite={removeFavorite}
					/>
				))
			) : (
				<div className='text-center items-center pl-2 pt-52'>
					<p>
						Избранные товары отсутствуют,{' '}
						<Link className='font-bold text-ellipsis' to='/catalog'>
							перейти в каталог
						</Link>
					</p>
				</div>
			)}
		</div>
	)
}

export default Favorite
