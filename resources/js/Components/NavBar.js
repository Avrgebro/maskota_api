import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import cn from 'clsx'


export default function NavBar({ className }) {
    const [active, setActive] = useState(false)

    return (
        <nav className="flex justify-between py-2 px-4 lg:px-0">
            <ApplicationLogo />

            <div className='hidden lg:flex space-x-12 my-auto text-white'>
                <Link><p className='font-semibold text-lg tracking-widest underline decoration-transparent decoration-[3px] underline-offset-8 transition duration-300 ease-in-out hover:decoration-atomic-tangerine group-hover:decoration-atomic-tangerine'>Home</p></Link>
                <Link><p className='font-semibold text-lg tracking-widest underline decoration-transparent decoration-[3px] underline-offset-8 transition duration-300 ease-in-out hover:decoration-atomic-tangerine group-hover:decoration-atomic-tangerine'>Nosotros</p></Link>
                <Link><p className='font-semibold text-lg tracking-widest underline decoration-transparent decoration-[3px] underline-offset-8 transition duration-300 ease-in-out hover:decoration-atomic-tangerine group-hover:decoration-atomic-tangerine'>Contacto</p></Link>
            </div>

            <div className='flex lg:hidden items-center justify-center'>
                <div className='flex w-8 h-8 border-2 border-white rounded-md' onClick={() => setActive(!active)}>
                    <div className="block pl-1 pt-3">
                        <span aria-hidden="true" className={cn('block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out', {'rotate-45': active},{'-translate-y-1.5': !active })}></span>
                        <span aria-hidden="true" className={cn('block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out', {'opacity-0': active})}></span>
                        <span aria-hidden="true" className={cn('block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out', {'-rotate-45': active},{'translate-y-1.5': !active })}></span>
                    </div>
                </div>

                <div className={cn('left-0 right-0 mx-auto flex flex-col space-y-8 text-gray-600 text-center py-4 absolute bg-white w-[350px] overflow-hidden border-1 border-gray-200 transform transition duration-300 ease-in-out top-20 rounded-lg shadow-lg', {'hidden': !active})}>
                    <Link><p className='font-semibold text-lg tracking-widest underline decoration-transparent decoration-[3px] underline-offset-8 transition duration-300 ease-in-out hover:decoration-atomic-tangerine group-hover:decoration-atomic-tangerine'>Home</p></Link>
                    <Link><p className='font-semibold text-lg tracking-widest underline decoration-transparent decoration-[3px] underline-offset-8 transition duration-300 ease-in-out hover:decoration-atomic-tangerine group-hover:decoration-atomic-tangerine'>Nosotros</p></Link>
                    <Link><p className='font-semibold text-lg tracking-widest underline decoration-transparent decoration-[3px] underline-offset-8 transition duration-300 ease-in-out hover:decoration-atomic-tangerine group-hover:decoration-atomic-tangerine'>Contacto</p></Link>
                </div>
            </div>
        </nav>
    );
}
