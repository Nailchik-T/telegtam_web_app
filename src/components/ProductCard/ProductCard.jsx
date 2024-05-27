import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
	const navigate = useNavigate()

	const onClick = () => {
		navigate(`/product/${product._id}`)
	}

	return (
		<>
			<div onClick={onClick} className='select-none'>
				<div class='p-5 shadow-custom flex justify-center items-center rounded-2xl h-40 w-40 bg-white'>
					<img
						src={`http://localhost:5000/${product.image}`}
						alt='Centered Image'
						className=' max-w-full max-h-full  '
					/>
				</div>
				<div className='flex flex-col'>
					<p className=' text-sm font-bold mt-2'>
						{product.price.toLocaleString()} ₸
					</p>
					<h2 className=' font-extralight '>{product.name}</h2>
				</div>
			</div>
		</>
	)
}

export default ProductCard
