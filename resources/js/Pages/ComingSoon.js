import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Public from '@/Layouts/Public';
import { Head } from '@inertiajs/inertia-react';

export default function ComingSoon({ }) {
    return (
        <>
            <Head>
                <title>Pronto</title>
                <meta name="description" content="Una nueva manera de interactuar con tus mascotas" />
            </Head>

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-green-400">
                <div>
                    <img className='w-96 h-auto' src="/img/coming-soon.svg"/>
                </div>

                <div className="w-full sm:max-w-xl mt-6 px-6 py-4 text-center">
                    <p className='text-5xl font-semibold text-white font-raleway'>¡¡Algo está por llegar!!</p>
                </div>
            </div>
            
        </>
        
    );
}
