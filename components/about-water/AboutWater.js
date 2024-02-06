import Image from "next/image"


const AboutWater = () => {
	return (
		<section className=''>
			<div className='container mx-auto'>
				<h3 className='sd:text-5xl xz:text-4xl text-center'>
					О воде
				</h3>
				<div className='flex sd:flex-row xz:flex-col items-center justify-between mt-5'>

					<div className='sd:w-2/3 xz:w-full'>
						<ul className=''>
							<li className='mb-3'>
								— Экологически чистый продукт. Соответствует стандарту "Эко-продукт". Подтверждено органом по сертификации ООО ССУ "ДЭКУЭС".
							</li>
							<li className='mb-3'>
								—  Срок годности – 12 месяцев при соблюдении условий транспортирования и хранения.
							</li>
							<li className='mb-3'>
								—  Транспортировать и хранить при температуре от +5°С до +25°С и относительной влажности воздуха не выше 85%, исключая воздействие прямых солнечных лучей.
							</li>
						</ul>
						<hr />
						<h4 className='mt-8 text-2xl'>
							Состав
						</h4>
						<p className="mt-3">КАТИОНЫ: <strong>Натрий</strong> Na++ <strong>Калий</strong> K+ &lt;10,
							<strong>Магний</strong> Mg2+ &lt;15, <strong>Кальций</strong> Ca2+ 20-80
							АНИОНЫ:
							<strong>Гидрокарбонаты</strong> HCO-₃ 120-250, <strong>Сульфаты</strong> SO2-₄ &lt;25,
							<strong>Хлориды</strong> CL- &lt;25
						</p>

						<h5 className='text-2xl mt-5'>
							Место добычи
						</h5>

						<p className='mt-3'>
							РФ, РСО-Алания, Пригородный р-он, с. Гусара, источник “Гусыра”.
						</p>
					</div>

					<div className='mx-auto sd:mt-0 xz:mt-10 relative'>
						<Image src='/voda.webp' alt='Вода Тбау' width={80} height={300} />
						<Image
							src='/logo-tbay.webp'
							alt='Логотип воды Тбау'
							width={60} height={60}
							className="absolute top-0 -right-24"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutWater