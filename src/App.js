import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomLayout from './components/CustomLayout/CustomLayout'
import Header from './components/Header/Header'
import { useTelegram } from './hooks/useTelegram'
import { Catalog } from './pages/catalog/Catalog'
import Home from './pages/home/Home'

function App() {
	const { onToggleButton, tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route element={<CustomLayout />}>
					<Route path='/catalog' element={<Catalog />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
