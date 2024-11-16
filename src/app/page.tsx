import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import "@/app/ui/globals.css";
import Navigation from './ui/navigation';
import Header from './ui/header';
import Footer from './ui/footer';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-hidden">
            <Header></Header>
            <div className=" w-100 h-100 bg-white">
                <span className='motostore-advice inline-block hidden'>Anuncios aquí</span>
                <hr className='w-4/5 h-1 bg-gray-100 m-auto' />
                <Navigation></Navigation>
            </div>
            <div  className="flex grow flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center gap-6  bg-white px-6 py-10 md:px-20">
                    <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        <strong>Welcome to Acme.</strong> This is the example for the{' '}
                        <a href="https://nextjs.org/learn/" className="text-blue-500">
                        Next.js Learn Course
                        </a>
                        , brought to you by Vercel.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}