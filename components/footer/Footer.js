import phoneNumbers from "@/config/config"
import Image from "next/image"


const Footer = () => {
	return (
		<footer className="footer footer-center p-10 bg-primary text-primary-content" id="contacts">
			<aside>
				<Image src='/logo/logo3.webp' alt='Логотип' width={90} height={90} />

				<h6 className='uppercase mb-3 mt-8 text-xl'>
					Контакты
				</h6>
				<div className='mb-3 text-2xl'>
					<a href={`tel:${phoneNumbers.mainPhoneLink}`} className="font-semibold xz:block sd:inline-block">
						{phoneNumbers.mainPhone}
					</a>
					<span className="mx-3 font-semibold">
						Георгий
					</span>
				</div>
				<div className='mb-3 text-2xl'>
					<a href={`tel:${phoneNumbers.secondaryPhoneLink}`} className="font-semibold xz:block sd:inline-block">
						{phoneNumbers.secondaryPhone}
					</a>
					<span className="mx-3 font-semibold">
						Cослан
					</span>
				</div>

				<div className=''>
					<h6 className='text-lg'>
						Режим работы
					</h6>
					<p className='text-xl'>
						8:00 - 20:00 <span className="text-accent">Пн-Вс</span>
					</p>
				</div>

				<p className="font-bold mt-4 text-2xl">
					bavariagrodno@mail.ru
				</p>

				<div className='mt-4'>
					<h6 className=''>
						УНП
					</h6>
					<p className=''>
						591964825
					</p>
				</div>

				<nav className="mt-4">
					<div className="flex justify-center items-center">
						<a href="http://wa.me/375298576666?text=Хочу%20купить" target="_blank" className='mx-2'>
							<Image src='/svg/whatsapp.svg' alt='whatsapp' width={30} height={30} />
						</a>
						<a href='https://t.me/' target='_blank' className='mx-2'>
							<Image src='/svg/telegram.svg' alt='telegram' width={35} height={35} />
						</a>
						<a href="https://www.youtube.com/watch?v=ssafxPzTcDQ" target="_blank" className='mx-2'>
							<Image src='/svg/youtube.svg' alt='youtube' width={35} height={35} />
						</a>
					</div>
				</nav>


				<aside className="border-t border-black pt-2">
					<p className='text-gray-800 xs:text-xs xz:text-[10px] font-light' >
						Copyright © 2024 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-700 underline'> VI:TECH</a>.
						{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
				</aside>
			</aside>
		</footer>
	)
}

export default Footer