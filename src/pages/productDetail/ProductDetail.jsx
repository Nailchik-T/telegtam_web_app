import { MdFavorite } from 'react-icons/md'
import icon from '../../assets/logo.png'
import Button from '../../components/Button/Button'

const ProductDetail = () => {
	return (
		<div className='flex flex-col' style={{}}>
			<div
				style={{ borderRadius: 50 }}
				className='flex flex-col items-center  bg-white mt-24'
			>
				<MdFavorite className='text-2xl text-gray-400 z-20 absolute top-28 right-14' />
				<div className=' absolute top-24 p-5 shadow-custom flex justify-center items-center rounded-2xl w-80 h-80 bg-secondary '>
					<img
						src={icon}
						alt='Centered Image'
						className=' max-w-full max-h-full  '
					/>
				</div>

				<div className='relative mt-64 px-6 mb-32'>
					<div className='font-bold text-2xl'>LOREM IPSUM</div>
					<div className='mt-2 text-sm font-bold text-primary'>
						Мужские кеды
					</div>
					<p className='text-sm font-light mt-2 text-primary  w-full mb-5  '>
						Мужские кеды из натуральной кожи ECCO STREET LITE M передают
						настоящую гармонию стиля и практичности. За лаконичным дизайном
						скрываются передовые технологии комфорта для максимальной свободы
						движения.
					</p>
				</div>
			</div>
			<div className='fixed flex w-full bottom-0 justify-between p-7 m-t items-center text-white bg-primary rounded-t-3xl'>
				<div className='flex flex-col'>
					<p className='font-extralight'>Цена</p>
					<p className='font-bold'>75 500 ₸</p>
				</div>
				<div>
					<Button className=' font-bold rounded-2xl px-10 py-4 bg-primaryDep text-white hover:bg-slate-800'>
						Добавить в корзину
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
