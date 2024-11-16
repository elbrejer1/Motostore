
import "@/app/ui/globals.css";
import Header from '../ui/header';
import Navigation from '../ui/navigation';
import Footer from '../ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
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
                   {children}
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}