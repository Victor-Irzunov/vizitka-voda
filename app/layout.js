import  Header  from "@/components/header/Header";
import "./globals.css";
import Footer from '@/components/footer/Footer'


export const metadata = {
  title: "",
  description: "",
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
