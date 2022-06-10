import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Flash from "@/Components/Shared/Flash";
import NavBar from '../Components/NavBar';


export default function Public({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 relative overflow-hidden z-10">
            <div className='max-w-7xl mx-auto'>
                <NavBar />
                <main className='py-12'>
                    {children}
                </main>
            </div>
            <div className='absolute rotate-45 -top-[300px] -right-[800px] lg:-right-[300px] h-[900px] w-[900px] lg:h-[1200px] lg:w-[1200px] rounded-[9rem] bg-gradient-to-b from-blue-500 to-[#02caf5] -z-10'></div>
        </div>
    );
}
