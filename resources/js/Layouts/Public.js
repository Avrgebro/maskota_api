import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Flash from "@/Components/Shared/Flash";


export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className='max-w-7xl mx-auto flex justify-between px-2 md:px-8 py-2'>
                    <ApplicationLogo />
                    
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
