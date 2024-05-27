const BasketCard = ({ product, countItems, removeFromBasket, addToCart }) => {
	return (
		<>
			<div className='flex bg-white p-4 rounded-2xl justify-between items-center'>
				<div className='flex items-center gap-4'>
					<div className='flex justify-center items-center w-28 h-28'>
						<img
							className='max-w-full max-h-full'
							src={`http://localhost:5000/${product.image}`}
							alt=''
						/>
					</div>
					<div>
						<h2 className='text-lg font-bold'>{product.name}</h2>
						<p className='text-sm text-primary font-extralight'>
							{product.price.toLocaleString()} ₸
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p
						onClick={() => removeFromBasket(product._id)}
						className='text-primaryDep bg-secondary text-2xl w-8 h-9 rounded-lg text-center'
					>
						-
					</p>
					<p className='text-primary font-bold text-lg'>
						{countItems(product._id)}
					</p>
					<p
						onClick={() => addToCart(product)}
						className='text-primaryDep bg-secondary text-2xl  w-8 h-9 rounded-lg text-center font-bold'
					>
						+
					</p>
				</div>
			</div>
		</>
	)
}

export default BasketCard
