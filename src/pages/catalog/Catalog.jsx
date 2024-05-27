import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaAlignLeft } from 'react-icons/fa6'
import ProductCard from '../../components/ProductCard/ProductCard'

export const Catalog = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('http://127.0.0.1:5000/api/products')
				setProducts(response.data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

	return (
		<>
			<div className='flex justify-between p-5'>
				<h3 className='font-bold text-xl'>Популярные</h3>
				<FaAlignLeft className='text-2xl text-primary' />
			</div>
			<div className={'flex gap-5 justify-center flex-wrap'}>
				{products.map(item => (
					<ProductCard product={item} />
				))}
			</div>
		</>
	)
}
