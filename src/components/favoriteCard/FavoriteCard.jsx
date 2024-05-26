import { MdFavorite } from 'react-icons/md'
import icon from '../../assets/logo.png'

const FavoriteCard = () => {
	return (
		<>
			<div className='flex bg-white p-4 rounded-2xl justify-between'>
				<div className='flex items-center gap-4'>
					<div className='flex justify-center items-center w-28 h-28'>
						<img className='max-w-full max-h-full' src={icon} alt='' />
					</div>
					<div>
						<h2 className='text-lg font-bold'>Lorem</h2>
						<p className='text-sm text-primary font-extralight'>75 500 ₸</p>
					</div>
				</div>
				<div className='inline-block bg-primary p-2 rounded-2xl h-10 '>
					<MdFavorite className='text-2xl  text-white ' />
				</div>
			</div>
		</>
	)
}

export default FavoriteCard