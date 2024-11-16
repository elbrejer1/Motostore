import Link from "next/link";
import MotostoreLogo from "./motostore-logo";

export default function Footer() {
    return (
        <div className="bg-white py-2 px-16 border-t-2">
            <div className="sm:w-full w-3/5 m-auto bg-white py-4">

                {/* <AcmeLogo /> */}
                <div className='flex sm:flex-row flex-col justify-between items-center text-center sm:text-left'>

                    <Link
                    className="flex h-20 items-end justify-start p-4 md:h-40"
                    href="/"
                    >
                        <MotostoreLogo/>
                    </Link>

                    <div className='mb-3'>
                        <h3>Servicios</h3>
                        <p>
                            <a href='#'>Streaming</a>
                        </p>
                        <p>
                            <a href='#'>Recargas</a>
                        </p>
                        <p>
                            <a href='#'>Divisas</a>
                        </p>
                        <p>
                            <a href='#'>Marketing digital</a>
                        </p>
                    </div>
                    <div className='mb-3'>
                        <p>Información</p>
                        <p><b>Empresa:</b> Mi empresa</p>
                        <p><b>RIF:</b> Mi RIF</p>
                        <p><b>Dirección:</b> Mi dirección</p>
                        <p><b>Teléfonos:</b> Mis teléfonos</p>
                        <p><b>Redes:</b> Mis redes</p>
                    </div>
                </div>
                <div className='text-center'>
                    <p>Políticas</p>
                    <p>© 2024 TONAS</p>
                </div>
            </div>

        </div>
    )
}