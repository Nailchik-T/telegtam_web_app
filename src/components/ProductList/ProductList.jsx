import React from 'react'
import { FaAlignLeft } from 'react-icons/fa6'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

const ProductList = () => {
	const products = [
		{
			id: 1,
			name: 'Nike Air Max 90',
			price: '35000',
			category: 'Мужские кеды',
			description:
				'Мужские кеды из натуральной кожи ECCO STREET LITE M передают настоящую гармонию стиля и практичности. За лаконичным дизайном скрываются передовые технологии комфорта для максимальной свободы движения.',
		},
		{
			id: 1,
			name: 'Nike Air Max 90',
			price: '35000',
			category: 'Мужские кеды',
			description:
				'Мужские кеды из натуральной кожи ECCO STREET LITE M передают настоящую гармонию стиля и практичности. За лаконичным дизайном скрываются передовые технологии комфорта для максимальной свободы движения.',
		},
		{
			id: 1,
			name: 'Nike Air Max 90',
			price: '35000',
			category: 'Мужские кеды',
			description:
				'Мужские кеды из натуральной кожи ECCO STREET LITE M передают настоящую гармонию стиля и практичности. За лаконичным дизайном скрываются передовые технологии комфорта для максимальной свободы движения.',
		},
		{
			id: 1,
			name: 'Nike Air Max 90',
			price: '35000',
			category: 'Мужские кеды',
			description:
				'Мужские кеды из натуральной кожи ECCO STREET LITE M передают настоящую гармонию стиля и практичности. За лаконичным дизайном скрываются передовые технологии комфорта для максимальной свободы движения.',
		},
	]
	return (
		<>
			<div className='flex justify-between p-5'>
				<h3 className='font-bold text-xl'>Популярные</h3>
				<FaAlignLeft className='text-2xl text-primary' />
			</div>
			<div className={'list gap-5'}>
				{products.map(item => (
					<ProductCard product={item} />
				))}
			</div>
		</>
	)
}

export default ProductList
