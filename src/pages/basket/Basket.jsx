import BasketCard from '../../components/BasketCard/BasketCard'

const Basket = () => {
	return (
		<div className='p-5'>
			<div className='flex flex-col gap-5'>
				<BasketCard />
				<BasketCard />
				<BasketCard />
			</div>
		</div>
	)
}

export default Basket
