import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Flash from "@/Components/Shared/Flash";


export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F6D365] to-[#FDA085] text-white">
            <nav className="max-w-7xl mx-auto flex justify-between px-2 md:px-8 py-2">
                <ApplicationLogo />

                <div className='flex space-x-8 my-auto'>
                    <Link>Home</Link>
                    <Link>Nosotros</Link>
                    <Link>Contacto</Link>

                </div>
            </nav>
            <main className='max-w-7xl mx-auto'>{children}</main>
        </div>
    );
}
