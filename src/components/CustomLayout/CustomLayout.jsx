import { Outlet } from 'react-router-dom'
import FooterNav from '../FooterNav/FooterNav'
import './CustomLayout.css'
const CustomLayout = () => {
	return (
		<>
			<div className='app-container'>
				<div className='content'>
					<Outlet />
				</div>
				<FooterNav />
			</div>
		</>
	)
}
export default CustomLayout
