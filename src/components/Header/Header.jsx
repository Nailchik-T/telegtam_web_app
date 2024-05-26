import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import { useTelegram } from '../../hooks/useTelegram'
import './Header.css'

const Header = () => {
	const { user, onClose } = useTelegram()
	console.log(user?.photo_url)
	return (
		<div className={'header bg-bg'}>
			<FaAngleLeft onClick={onClose} className='text-3xl text-primary' />
			<MdAccountCircle className='username text-3xl text-primary' />
		</div>
	)
}

export default Header
