import React from 'react'
import { FaChevronLeft } from 'react-icons/fa6'
import { MdAccountCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useTelegram } from '../../hooks/useTelegram'
import './Header.css'

const Header = () => {
	const { user, onClose } = useTelegram()
	const navigate = useNavigate()
	const isActive = path => location.pathname === path
	const handleClick = () => {
		isActive ? navigate('/catalog') : onClose()
	}
	return (
		<div className={'header'}>
			<FaChevronLeft onClick={handleClick} className='text-2xl text-primary' />
			<MdAccountCircle className='username text-3xl text-primary' />
		</div>
	)
}

export default Header
