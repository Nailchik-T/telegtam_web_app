import icon from '../../assets/Icons.png'
import Button from '../../components/Button/Button'

const ProductDetail = () => {
	return (
		<>
			<div
				style={{ borderRadius: 50 }}
				className='flex flex-col items-center p-5 bg-white mt-24'
			>
				<div className=' absolute top-24 p-5 shadow-custom flex justify-center items-center rounded-2xl w-80 h-80 bg-secondary'>
					<img
						src={icon}
						alt='Centered Image'
						className=' max-w-full max-h-full  '
					/>
				</div>
				<div className='relative mt-64 px-6'>
					<div className='font-bold text-2xl'>LOREM IPSUM</div>
					<div className='mt-2 text-sm font-light text-primary'>
						Lorem ipsum dolor sit
					</div>
					<p className='text-sm font-light mt-2 text-primary  w-full  '>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit ыфвыф.
						Suscipit qui neque consequuntur officia reprehenderit id quae
						laboriosam! Aut magni minus repudiandae deleniti ab sed pariatur
						porro, id perferendis omnis fugiat?
					</p>
				</div>
			</div>
			<div className='flex justify-between p-7 items-center text-white bg-primary rounded-t-3xl'>
				<div className='flex flex-col'>
					<p className='font-extralight'>Price</p>
					<p className='font-bold'>$ 100</p>
				</div>
				<div>
					<Button className=' rounded-2xl px-10 py-4 bg-primaryDep text-white hover:bg-slate-800'>
						Add to Bag
					</Button>
				</div>
			</div>
		</>
	)
}

export default ProductDetail
