import icon from '../../assets/logo.png'

const BasketCard = () => {
	return (
		<>
			<div className='flex bg-white p-4 rounded-2xl justify-between items-center'>
				<div className='flex items-center gap-4'>
					<div className='flex justify-center items-center w-28 h-28'>
						<img className='max-w-full max-h-full' src={icon} alt='' />
					</div>
					<div>
						<h2 className='text-lg font-bold'>Lorem</h2>
						<p className='text-sm text-primary font-extralight'>75 500 ₸</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='text-primaryDep bg-secondary text-2xl w-8 h-9 rounded-lg text-center'>
						-
					</p>
					<p className='text-primary font-bold text-lg'>1</p>
					<p className='text-primaryDep bg-secondary text-2xl  w-8 h-9 rounded-lg text-center font-bold'>
						+
					</p>
				</div>
			</div>
		</>
	)
}

export default BasketCard
