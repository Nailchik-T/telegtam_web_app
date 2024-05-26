import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './home.css'
export const Home = () => {
	const navigate = useNavigate()
	const onClick = () => {
		navigate('/catalog')
	}
	return (
		<>
			<div className='flex flex-col container justify-center items-center gap-2'>
				<h1 className='font-bold text-center text-2xl'>
					Добро пожаловать в наш интернет-магазин
				</h1>
				<p className='text-center mb-10'>
					Присоединяйтесь к нам в Telegram и откройте для себя лучшие
					предложения и уникальные товары.
				</p>
				<Button
					onClick={onClick}
					className='w-56 text-white rounded-full bg-primary px-15 py-3'
				>
					Перейти к покупкам
				</Button>
			</div>
		</>
	)
}
export default Home
