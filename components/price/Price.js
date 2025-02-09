import React, { useState } from 'react';
import { priceData } from '@/constans/dataPrice';
import phoneNumbers from '@/config/config';

const Price = ({ handleOrderClick }) => {
	const [filter, setFilter] = useState('all');

	const handleFilterChange = (filterValue) => {
		setFilter(filterValue);
	};

	const add20PercentToPrice = (price) => price * 1;

	const filteredProducts = filter === 'all' ? priceData : priceData.filter(category => category.title === filter);

	return (
		<section className='pt-20 pb-2' id="catalog">
			<div className='container mx-auto'>
				<div>
					<h6 className='sd:text-5xl xz:text-4xl text-center'>
						Каталог
					</h6>
				</div>
				<div className='mt-9'>
					<p className='text-center uppercase text-xs'>
						Фильтр
					</p>
					<div className='flex justify-center flex-wrap mt-2 text-center'>
						<div onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'font-bold mx-2 cursor-pointer sd:text-sm xz:text-[8px] underline mt-2' : 'mx-2 cursor-pointer sd:text-sm xz:text-[8px] mt-2'}>
							Все
						</div>
						{priceData.map(category => (
							<div key={category.id} onClick={() => handleFilterChange(category.title)} className={filter === category.title ? 'font-bold mx-2 cursor-pointer sd:text-sm xz:text-[8px] underline mt-2' : 'mx-2 cursor-pointer sd:text-sm xz:text-[8px] mt-2'}>
								{category.title}
							</div>
						))}
					</div>
				</div>
				<div className='mt-8'>
					{filteredProducts.map(el => {
						return (
							<div
								className='bg-slate-200 mb-20 py-5 sd:px-5 xz:px-1 rounded-md'
								key={el.id}
							>
								<h2 className='sd:text-5xl xz:text-3xl text-center'>
									{el.title}
								</h2>
								<p className='mt-5 text-center sd:text-base xz:text-sm'>
									{el.description}
								</p>
								<div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
									{el.children.map(elem => {
										const updatedPrice = add20PercentToPrice(elem.price);
										return (
											<div
												key={elem.id}
												className='card pt-1 sd:w-96 xz:w-full bg-base-100 shadow-xl mb-8 sd:mx-1 xz:mx-0'
											>
												<figure>
													<img
														src={elem.img}
														alt={elem.alt}
														width={90}
														height={100}
													/>
												</figure>
												<div className='card-body'>
													<h3 className='card-title sd:text-2xl xz:text-xl'>
														{elem.name}
													</h3>
													<div className='badge badge-accent'>
														{elem.badge}
													</div>
													<p className='mt-2 sd:text-base xz:text-sm'>
														<span className='font-semibold'>
															Объём:
														</span>{' '}
														{elem.volume} л.
													</p>
													<p className='sd:text-base xz:text-sm'>
														<span className='font-semibold'>
															Тара:
														</span>{' '}
														{elem.type}
													</p>
													<p className='sd:text-base xz:text-sm'>
														<span className='font-semibold'>
															В упак. штук:
														</span>{' '}
														{elem.packaging}
													</p>
													{/* <p className='mb-2 sd:text-xs xz:text-[9px] text-gray-600'>
														{elem.info}
													</p> */}
													<p className='mt-3'>
														Цена товара (без НДС)
													</p>
													<p className='text-xl text-green-500'>
														{/* {updatedPrice.toFixed(2)} BYN */}
														уточняйте
													</p>
													<div className='card-actions justify-between mt-5'>
														<div className=''>
															<a href={`tel:${phoneNumbers.secondaryPhoneLink}`} className={``}>
																<button className="relative overflow-hidden bg-yellow-400 text-black font-bold py-3 sd:px-12 xz:px-16 rounded-lg shadow-lg flex items-center gap-2">
																	<svg className="w-6 h-6 animate-ringing" fill="currentColor" viewBox="0 0 24 24">
																		<path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.23 11.36 11.36 0 003.55.57 1 1 0 011 1v3.55a1 1 0 01-1 1A19.94 19.94 0 012 4a1 1 0 011-1h3.55a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.23 1.1z"></path>
																	</svg>
																	Позвонить
																	<span className="absolute inset-0 bg-white opacity-40 transform translate-x-full animate-slide"></span>
																</button>
															</a>
														</div>
														<button
															className='btn btn-primary sd:w-auto xz:w-full font-bold text-base'
															onClick={() => handleOrderClick(`Купить ${elem.name}`)}
														>
															Купить
														</button>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
				<div className='mb-10'>
					<a href='/price.pdf' download className='underline font-semibold'>
						Скачать прайс (pdf)
					</a>
				</div>
			</div>
		</section>
	);
};

export default Price;
