import  Header  from "@/components/header/Header";
import "./globals.css";
import Footer from '@/components/footer/Footer'


export const metadata = {
  title: "Оптовый склад безалкогольных напитков Бавария",
  description: "Предлагаем широкий ассортимент напитков высокого качества для вашего бизнеса. Мы предоставляем разнообразные газированные напитки, минеральную воду и другие безалкогольные напитки прямо от производителей. Наша компания гарантирует надежные поставки, конкурентоспособные цены и высокий уровень обслуживания."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
