import imgs from '../../assets/logo.jpg'

const ProductCard = () => {
	return (
		<>
			<div className='select-none'>
				<div class=' shadow-custom flex justify-center items-center rounded-2xl h-40 w-40 bg-white'>
					<img
						src={imgs}
						alt='Centered Image'
						className='max-w-full max-h-full  '
					/>
				</div>

				<div className='flex flex-col'>
					<p className=' text-lg font-bold'>$239.80</p>
					<h2 className=' font-extralight '>Nike Air Max 90</h2>
				</div>
			</div>
		</>
	)
}

export default ProductCard
