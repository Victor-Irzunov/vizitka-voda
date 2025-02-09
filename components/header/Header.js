"use client"
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkScroll } from 'react-scroll';

const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};



	return (
		<header className="fixed sd:top-7 xz:top-6 z-50 left-0 right-0">
			<div className="container mx-auto">
				<div className="">
					<div className="flex justify-between items-center w-full">
						<div className="">
							<Image src="/logo/logo3.webp" alt="Логотип компании" width={80} height={80} />
						</div>
						<div className="">
							<Image
								src="/svg/menu.svg"
								alt="Меню"
								width={40}
								height={40}
								onClick={toggleMenu}
								className="cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-95 text-white flex items-center justify-center sd:w-1/2 xz:w-full`}
					>
						<nav className="text-2xl font-semibold">
							<ul className="flex flex-col items-center space-y-6 text-white">
								<li>
									<LinkScroll
										to="main"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
										onClick={toggleMenu}
									>
										Главная
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="about"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
										onClick={toggleMenu}
									>
										О нас
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="catalog"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
										onClick={toggleMenu}
									>
										Каталог
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="contacts"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
										onClick={toggleMenu}
									>
										Контакты
									</LinkScroll>
								</li>
							</ul>
						</nav>
						{/* Кнопка закрытия меню */}
						<div className="absolute top-6 right-10">
							<Image
								src="/svg/close.svg"
								alt="Закрыть меню"
								width={24}
								height={24}
								onClick={closeMenu}
								className="cursor-pointer"
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
