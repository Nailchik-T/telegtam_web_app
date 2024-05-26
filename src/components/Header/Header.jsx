import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

import { useTelegram } from '../../hooks/useTelegram'
import './Header.css'

const Header = () => {
	const { user, onClose } = useTelegram()

	return (
		<div className={'header'}>
			<FaAngleLeft onClick={onClose} className='text-3xl text-primary' />
			<span className={'username'}>{user?.username}</span>
		</div>
	)
}

export default Header
