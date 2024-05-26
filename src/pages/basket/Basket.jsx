import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BasketCard from '../../components/BasketCard/BasketCard'
import Button from '../../components/Button/Button'

const Basket = () => {
	const [basketItems, setBasketItems] = useState([])

	useEffect(() => {
		const storedItems = localStorage.getItem('cart')
		if (storedItems !== null) {
			setBasketItems(JSON.parse(storedItems))
		}
	}, [])

	const removeFromBasket = itemId => {
		const indexToRemove = basketItems.findIndex(item => item.id === itemId)
		if (indexToRemove !== -1) {
			const updatedBasketItems = [...basketItems]
			updatedBasketItems.splice(indexToRemove, 1)
			setBasketItems(updatedBasketItems)
			localStorage.setItem('cart', JSON.stringify(updatedBasketItems))
		}
	}
	const addToCart = product => {
		const updatedCart = [...basketItems, product]
		setBasketItems(updatedCart)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
	}

	const countItems = itemId => {
		return basketItems.filter(item => item.id === itemId).length
	}

	const uniqueBasketItems = Array.from(
		new Set(basketItems.map(item => item.id))
	).map(id => {
		return {
			...basketItems.find(item => item.id === id),
			count: countItems(id),
		}
	})
	const sum = basketItems.reduce((currentSum, currentItem) => {
		return currentSum + parseInt(currentItem.price)
	}, 0)

	return (
		<div>
			<div className='flex flex-col gap-5 p-5'>
				{uniqueBasketItems.map(product => (
					<BasketCard
						key={product.id}
						product={product}
						countItems={countItems}
						addToCart={addToCart}
						removeFromBasket={removeFromBasket}
					/>
				))}
			</div>
			<div
				className='fixed flex w-full bottom-0
		 px-7 m-t  text-white bg-primary h-44 rounded-t-3xl pt-6 justify-between'
			>
				{basketItems.length > 0 ? (
					<>
						<div className='flex flex-col'>
							<p className='font-extralight'>Итого</p>
							<p className='font-bold'>{sum.toLocaleString()} ₸</p>
						</div>
						<div>
							<Button className=' font-bold rounded-2xl px-10 py-4 bg-primaryDep text-white hover:bg-slate-800'>
								Купить
							</Button>
						</div>
					</>
				) : (
					<div className='text-center items-center pl-8 pt-4'>
						<p>
							Корзина пуста,{' '}
							<Link className='font-bold text-ellipsis' to='/catalog'>
								перейти в каталог
							</Link>
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Basket
