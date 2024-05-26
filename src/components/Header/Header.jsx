import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

import { useTelegram } from '../../hooks/useTelegram'
import './Header.css'

const Header = () => {
	const { user, onClose, useGetUserImage } = useTelegram()

	return (
		<div className={'header'}>
			<FaAngleLeft onClick={onClose} className='text-3xl text-primary' />
			<img className='username w-5 h-5' src={useGetUserImage()} alt='me' />
		</div>
	)
}

export default Header
