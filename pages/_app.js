
import Layout from '../components/layout/Layout';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Tulio&trade;</title>
        <meta name="description" content="Atmosoft is your one-stop solution for all your software needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Atmosoft, software, web development, mobile apps, cloud solutions" />
        <meta name="author" content="Atmosoft Team" />
        {/* <link rel="icon" href="Athob.png" /> */}
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
  );
}




/* import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tulio",
  description: "Erect By Atmosoft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
 */