import { useNavigate } from 'react-router-dom'
import imgs from '../../assets/Icons.png'

const ProductCard = () => {
	const navigate = useNavigate()

	const onClick = () => {
		navigate('/product/1')
	}
	return (
		<>
			<div onClick={onClick} className='select-none'>
				<div class='p-5 shadow-custom flex justify-center items-center rounded-2xl h-40 w-40 bg-white'>
					<img
						src={imgs}
						alt='Centered Image'
						className=' max-w-full max-h-full  '
					/>
				</div>

				<div className='flex flex-col'>
					<p className=' text-sm font-bold mt-2'>12 500 ₸ </p>
					<h2 className=' font-extralight '>Nike Air Max 90</h2>
				</div>
			</div>
		</>
	)
}

export default ProductCard
