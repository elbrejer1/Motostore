import Image from "next/image";
import Link from "next/link";
import MotostoreLogo from "./motostore-logo";

export default function Header() {
    return (
        <div className=" w-100 h-100 bg-white sm:px-16 pt-4 md:h-100">
            <div className='flex sm:flex-row flex-col justify-between items-center w-100'>
                <Link
                    className="mb-2 flex h-20 items-end justify-start p-4 md:h-40"
                    href="/"
                >
                    <MotostoreLogo/>
                </Link>
                {/* <Image
                    src="/tonas-logo.png"
                    width={180}
                    height={100}
                    className='md-block flex justify-center align-middle mt-0 sm:mt-5'
                    alt='Website logo'
                /> */}
                <div className='text-center'>
                    <p>Buenas tardes</p>
                    <p>Martes, 26 de marzo del 2024</p>
                </div>
            </div>
        </div>
    )
}