import { message } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdFavorite } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'

const ProductDetail = () => {
	const { id } = useParams()

	const [product, setProduct] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [cart, setCart] = useState(() => {
		const savedCart = localStorage.getItem('cart')
		return savedCart ? JSON.parse(savedCart) : []
	})
	const isFavorite = productId => {
		const favorites = getFavorites()
		return favorites.some(item => item._id === productId)
	}
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5000/api/products/find/${id}`
				)
				setProduct(response.data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [isFavorite])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

	const addToCart = () => {
		message.success('Товар добавлен в корзину.')
		const updatedCart = [...cart, product]
		setCart(updatedCart)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
	}
	const getFavorites = () => {
		const favoritesString = localStorage.getItem('favorites')
		return favoritesString ? JSON.parse(favoritesString) : []
	}

	const addFavorite = product => {
		const favorites = getFavorites()
		const existingIndex = favorites.findIndex(item => item._id === product._id)
		if (existingIndex === -1) {
			favorites.push(product)
			localStorage.setItem('favorites', JSON.stringify(favorites))
			message.success('Товар добавлен в избранное.')
		} else {
			message.warning('Товар уже есть в избранном.')
		}
	}
	const removeFavorite = productId => {
		let favorites = getFavorites()
		favorites = favorites.filter(item => item._id !== productId)
		localStorage.setItem('favorites', JSON.stringify(favorites))
		message.warning('Товар удален из избранного.')
	}
	const toggleFavorite = product => {
		if (isFavorite(product._id)) {
			removeFavorite(product._id)
		} else {
			addFavorite(product)
		}
	}

	return (
		<div className='flex flex-col' style={{}}>
			<div
				style={{ borderRadius: 50 }}
				className='flex flex-col items-center  bg-white mt-24'
			>
				<MdFavorite
					onClick={() => toggleFavorite(product)}
					className={`${
						isFavorite(product._id) ? ' text-red-600 ' : 'text-gray-400'
					} text-2xl z-20 absolute top-28 right-14`}
				/>
				<div className=' absolute top-24 p-5 shadow-custom flex justify-center items-center rounded-2xl w-80 h-80 bg-secondary '>
					<img
						src={`http://localhost:5000/${product.image}`}
						alt='Centered Image'
						className=' max-w-full max-h-full  '
					/>
				</div>

				<div className='relative mt-64 px-6 mb-32'>
					<div className='font-bold text-2xl'> {product.name}</div>
					<div className='mt-2 text-sm font-bold text-primary'>
						{product.category}
					</div>
					<p className='text-sm font-light mt-2 text-primary  w-full mb-5  '>
						{product.description}
					</p>
				</div>
			</div>
			<div className='fixed flex w-full bottom-0 justify-between p-7 m-t items-center text-white bg-primary rounded-t-3xl'>
				<div className='flex flex-col'>
					<p className='font-extralight'>Стоимость</p>
					<p className='font-bold'>{product.price.toLocaleString()}</p>
				</div>
				<div>
					<Button
						onClick={addToCart}
						className=' font-bold rounded-2xl px-10 py-4 bg-primaryDep  text-sm text-white hover:bg-slate-800'
					>
						В корзину
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
