import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

import { useTelegram } from '../../hooks/useTelegram'
import './Header.css'

const Header = () => {
	const { user, onClose } = useTelegram()

	return (
		<div className={'header'}>
			<FaAngleLeft onClick={onClose} className='text-3xl text-primary' />
			<img className='username w-5 h-5' src={user.photo_url} alt='me' />
		</div>
	)
}

export default Header
