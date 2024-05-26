import BasketCard from '../../components/BasketCard/BasketCard'
import Button from '../../components/Button/Button'
const Basket = () => {
	return (
		<div>
			<div className='flex flex-col gap-5 p-5'>
				<BasketCard />
				<BasketCard />
				<BasketCard />
			</div>
			<div
				className='fixed flex w-full bottom-0
		 px-7 m-t  text-white bg-primary h-44 rounded-t-3xl pt-6 justify-between'
			>
				<div className='flex flex-col'>
					<p className='font-extralight'>Итого</p>
					<p className='font-bold'>175 500 ₸</p>
				</div>
				<div>
					<Button className=' font-bold rounded-2xl px-10 py-4 bg-primaryDep text-white hover:bg-slate-800'>
						Купить
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Basket
