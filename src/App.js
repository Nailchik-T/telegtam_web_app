import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomLayout from './components/CustomLayout/CustomLayout'
import Header from './components/Header/Header'
import { useTelegram } from './hooks/useTelegram'
import Basket from './pages/basket/Basket'
import { Catalog } from './pages/catalog/Catalog'
import Favorite from './pages/favorite/Favorite'
import Home from './pages/home/Home'
import ProductDetail from './pages/productDetail/ProductDetail'

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
					<Route path='/basket' element={<Basket />} />
					<Route path='/favorite' element={<Favorite />} />
				</Route>
				<Route path='/product/:id' element={<ProductDetail />} />
			</Routes>
		</div>
	)
}

export default App
