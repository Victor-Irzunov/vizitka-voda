import About from "@/components/about/About";
import Image from "next/image";

export default function Home() {
  return (
    <main className="" id="main">
     


      <section className="hero background-video">
        {/* <video src="https://www.bavaria-group.ru/files/modules/1_1688043892.mp4" autoPlay loop muted></video> */}
        <video
					autoPlay
					playsInline
					muted
					loop
				>
					<source src='https://www.bavaria-group.ru/files/modules/1_1688043892.mp4' type='video/mp4' />
				</video>
      <div className="overlay"></div>
        <div className="hero-content text-center">
          <div className="sd:max-w-lg xz:w-full sd:pt-0 xz:pt-20">
            <h1 className="sd:text-6xl xz:text-4xl font-bold text-white">
              Эксклюзивный импортер безалкогольных напитков
              <span className="text-primary block mt-2 sd:text-7xl xz:text-5xl">
                «Бавария»
              </span>
            </h1>

            <p className="py-6 text-white/90 font-light sd:text-base xz:text-sm">
              Предлагаем выгодные условия для оптовых покупателей и гарантируем высокое качество нашей продукции. Наши  напитки отличаются неповторимым вкусом и безупречным качеством. Мы гордимся тем, что являемся эксклюзивным импортером этого превосходного бренда, предоставляя вам уникальную возможность наслаждаться изысканными и натуральными напитками.
            </p>

            <button className="btn btn-primary uppercase mt-3">
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      <About />

      <div className='mx-auto'>
        <Image src='/fon/fon.webp' alt='Питьевая вода Тбау' width={1920} height={763} />
      </div>
    </main>
  );
}
