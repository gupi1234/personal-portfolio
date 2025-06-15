import { Outfit as OutfitFont, Ovo as OvoFont } from 'next/font/google';
import './globals.css';

const outfit = OutfitFont({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const ovo = OvoFont({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Gupi | Portfolio',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
