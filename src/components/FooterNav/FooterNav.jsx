import { AiFillAppstore } from 'react-icons/ai'
import { IoMdHome } from 'react-icons/io'
import { MdFavorite, MdShoppingCart } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

import './FooterNav.css'

const FooterNav = () => {
	const location = useLocation()

	const isActive = path => location.pathname === path

	return (
		<nav className='footer-nav'>
			<ul>
				<li>
					<Link to={'/'}>
						<IoMdHome
							className={
								isActive('/')
									? 'text-3xl text-primary'
									: 'text-3xl text-secondary'
							}
						/>
					</Link>
				</li>
				<li>
					<Link to={'/catalog'}>
						<AiFillAppstore
							className={
								isActive('/catalog')
									? 'text-4xl text-primary'
									: 'text-3xl text-secondary'
							}
						/>
					</Link>
				</li>
				<li>
					<Link to={'/favorites'}>
						<MdFavorite
							className={
								isActive('/favorites')
									? 'text-4xl text-primary'
									: 'text-3xl text-secondary'
							}
						/>
					</Link>
				</li>
				<li>
					<Link to={'/basket'}>
						<MdShoppingCart
							className={
								isActive('/basket')
									? 'text-4xl text-primary'
									: 'text-3xl text-secondary'
							}
						/>{' '}
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default FooterNav
