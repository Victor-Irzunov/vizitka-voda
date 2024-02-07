import { priceData } from "@/constans/dataPrice";

const Price = ({ handleOrderClick }) => {
	return (
		<section className='py-20' id="catalog">
			<div className='container mx-auto'>
				<div>
					<h6 className='sd:text-5xl xz:text-4xl text-center'>
						Каталог
					</h6>
				</div>

				<div className='mt-8'>
					{priceData.map(el => {
						return (
							<div
								className='bg-slate-200 mb-20 py-10 sd:px-5 xz:px-1 rounded-md'
								key={el.id}
							>
								<h2 className='sd:text-5xl xz:text-3xl text-center'>
									{el.title}
								</h2>
								<div className='grid grid-cols-1 md:grid-cols-3  mt-10'>
									{el.children.map(elem => {
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
													<h3 className='card-title sd:text-3xl xz:text-xl'>
														{elem.name}

													</h3>
													<div className='badge badge-accent'>
														{elem.badge}
													</div>
													<p className='mt-5'>
														<span className='font-semibold'>
															Объём:
														</span>{' '}
														{elem.volume} л.
													</p>
													<p className=''>
														<span className='font-semibold'>
															Тара:
														</span>{' '}
														{elem.type}
													</p>
													<p className='mb-5'>
														<span className='font-semibold'>
															В упак. штук:
														</span>{' '}
														{elem.packaging}
													</p>
													<p className=''>
														Цена товара (без НДС)
													</p>
													<p className='font-bold text-3xl'>
														{elem.price.toFixed(2)} BYN
													</p>
													<div className='card-actions justify-end'>
														<button
															className='btn btn-primary'
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
			</div>
		</section>
	);
};

export default Price;
