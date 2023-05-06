import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'yukyu web site',
  description: 'Yukyuについて書かれたブログ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} p-4 mx-auto max-w-md bg-slate-900`}>
        {children}
      </body>
    </html>
  );
}
