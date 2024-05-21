import { Link } from 'react-router-dom'
import basket from '../../assets/basket.svg'
import catalog from '../../assets/catalog.svg'
import favorites from '../../assets/favorite.svg'
import home from '../../assets/home.svg'
import './FooterNav.css'

const FooterNav = () => {
	return (
		<nav className='footer-nav'>
			<ul>
				<li>
					<Link to={'/'}>
						<img className='w-7' src={home} alt='home' />
					</Link>
				</li>
				<li>
					<Link to={'/'}>
						<img className='w-7 texy-' src={catalog} alt='catalog' />
					</Link>
				</li>
				<li>
					<Link to={'/favorites'}>
						<img className='w-7' src={favorites} alt='favorites' />
					</Link>
				</li>
				<li>
					<Link to={'/basket'}>
						<img className='w-7' src={basket} alt='favorites' />
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default FooterNav
